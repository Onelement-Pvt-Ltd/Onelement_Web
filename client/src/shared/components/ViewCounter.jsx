import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const LAST_COUNTED_KEY = "onelement:last-counted-date";
const CACHED_TOTAL_KEY = "onelement:view-total";
const CACHE_TIME_KEY = "onelement:view-total-time";
const CACHE_MAX_AGE_MS = 15 * 60 * 1000;
const INDIA_OFFSET_MS = 5.5 * 60 * 60 * 1000;

let activeRequest;

const getIndiaDate = () =>
  new Date(Date.now() + INDIA_OFFSET_MS).toISOString().slice(0, 10);

const readCache = () => {
  try {
    const total = Number(localStorage.getItem(CACHED_TOTAL_KEY));
    const cachedAt = Number(localStorage.getItem(CACHE_TIME_KEY));

    if (Number.isInteger(total) && total >= 0 && Date.now() - cachedAt < CACHE_MAX_AGE_MS) {
      return total;
    }
  } catch {
    // Storage can be unavailable in privacy modes; the counter still works without it.
  }

  return null;
};

const fetchViewTotal = () => {
  if (activeRequest) return activeRequest;

  activeRequest = (async () => {
    const today = getIndiaDate();
    let alreadyCounted = false;

    try {
      alreadyCounted = localStorage.getItem(LAST_COUNTED_KEY) === today;
    } catch {
      // Fall back to counting the visit when storage is unavailable.
    }

    const cachedTotal = readCache();
    if (alreadyCounted && cachedTotal !== null) {
      return cachedTotal;
    }

    const response = await fetch("/api/views", {
      method: alreadyCounted ? "GET" : "POST",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("View counter request failed");

    const result = await response.json();
    const total = Number(result.total);
    if (!Number.isInteger(total) || total < 0) {
      throw new Error("View counter returned invalid data");
    }

    try {
      if (!alreadyCounted) {
        localStorage.setItem(LAST_COUNTED_KEY, result.countedDate ?? today);
      }
      localStorage.setItem(CACHED_TOTAL_KEY, String(total));
      localStorage.setItem(CACHE_TIME_KEY, String(Date.now()));
    } catch {
      // Persistence is an optimization, not a requirement.
    }

    return total;
  })().finally(() => {
    activeRequest = undefined;
  });

  return activeRequest;
};

const ViewCounter = () => {
  const [total, setTotal] = useState(readCache);

  useEffect(() => {
    let mounted = true;

    fetchViewTotal()
      .then((nextTotal) => {
        if (mounted) setTotal(nextTotal);
      })
      .catch(() => {
        // Keep analytics failures from affecting the rest of the site.
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <p className="footer-view-counter" aria-live="polite">
      <Eye aria-hidden="true" size={15} />
      <span>{total === null ? "—" : total.toLocaleString("en-IN")} views</span>
    </p>
  );
};

export default ViewCounter;
