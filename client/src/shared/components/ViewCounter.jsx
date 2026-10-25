import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Eye } from "lucide-react";
import { API_BASE_URL } from "@/shared/config/api";

const LEGACY_STORAGE_KEYS = [
  "onelement:last-counted-date",
  "onelement:view-total",
  "onelement:view-total-time",
];

const registerView = async () => {
  const response = await fetch(`${API_BASE_URL}/views`, {
    method: "POST",
    credentials: "include",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) throw new Error("View counter request failed");

  const result = await response.json();
  const total = Number(result.total);
  if (!Number.isInteger(total) || total < 0) {
    throw new Error("View counter returned invalid data");
  }

  return total;
};

const ViewCounter = () => {
  const { data: total } = useQuery({
    queryKey: ["site-view-total"],
    queryFn: registerView,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    try {
      LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
    } catch {
      // Storage may be unavailable in privacy modes.
    }
  }, []);

  return (
    <p className="footer-view-counter" aria-live="polite">
      <Eye aria-hidden="true" size={15} />
      <span>{total === undefined ? "—" : total.toLocaleString("en-IN")} views</span>
    </p>
  );
};

export default ViewCounter;
