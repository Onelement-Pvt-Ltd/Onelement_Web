import { useMemo, useState } from "react";
import { BarChart3, Eye, LockKeyhole, LogOut, RefreshCw } from "lucide-react";

const formatNumber = (value) =>
  new Intl.NumberFormat("en-IN").format(Number(value || 0));

const getIndiaDate = () => {
  const offset = 5.5 * 60 * 60 * 1000;
  return new Date(Date.now() + offset).toISOString().slice(0, 10);
};

const AdminViews = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const today = getIndiaDate();
  const dailyRows = useMemo(
    () =>
      Object.entries(stats?.daily ?? {}).sort(([left], [right]) =>
        right.localeCompare(left),
      ),
    [stats],
  );

  const loadStats = async (nextCredentials = credentials) => {
    setLoading(true);
    setError("");

    try {
      const token = btoa(`${nextCredentials.username}:${nextCredentials.password}`);
      const response = await fetch("/api/view-stats", {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${token}`,
        },
      });
      const responseBody = await response.text();
      let result;

      try {
        result = responseBody ? JSON.parse(responseBody) : null;
      } catch {
        throw new Error("The view statistics API is not available. Restart the local development server.");
      }

      if (!result) {
        throw new Error("The view statistics API returned an empty response. Restart the local development server.");
      }

      if (!response.ok) {
        throw new Error(result.error || "Unable to load view statistics");
      }

      setStats(result);
    } catch (requestError) {
      setStats(null);
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loadStats();
  };

  const handleLogout = () => {
    setStats(null);
    setCredentials({ username: "", password: "" });
    setError("");
  };

  if (!stats) {
    return (
      <main className="min-h-screen bg-[#f4f7fb] px-4 py-12 text-[#10233f]">
        <section className="mx-auto mt-[8vh] w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(10,41,85,0.10)]">
          <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#0a2955] text-white">
            <LockKeyhole aria-hidden="true" size={23} />
          </div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#23b65f]">Private area</p>
          <h1 className="text-3xl font-bold tracking-tight">View statistics</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">Sign in to see the private daily view history.</p>

          <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-semibold">
              Username
              <input
                autoComplete="username"
                className="h-11 rounded-lg border border-slate-300 px-3 font-normal outline-none transition focus:border-[#0a2955] focus:ring-2 focus:ring-[#0a2955]/15"
                onChange={(event) => setCredentials((current) => ({ ...current, username: event.target.value }))}
                required
                type="text"
                value={credentials.username}
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Password
              <input
                autoComplete="current-password"
                className="h-11 rounded-lg border border-slate-300 px-3 font-normal outline-none transition focus:border-[#0a2955] focus:ring-2 focus:ring-[#0a2955]/15"
                onChange={(event) => setCredentials((current) => ({ ...current, password: event.target.value }))}
                required
                type="password"
                value={credentials.password}
              />
            </label>
            {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p>}
            <button
              className="mt-2 h-11 rounded-lg bg-[#0a2955] font-bold text-white transition hover:bg-[#103c74] disabled:cursor-wait disabled:opacity-60"
              disabled={loading}
              type="submit"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </section>
      </main>
    );
  }

  const updatedAt = stats.updatedAt
    ? new Date(stats.updatedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    : "No views recorded yet";

  return (
    <main className="min-h-screen bg-[#f4f7fb] px-4 py-10 text-[#10233f]">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#23b65f]">Private analytics</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">View statistics</h1>
            <p className="mt-2 text-sm text-slate-500">Daily boundaries use India Standard Time.</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-bold transition hover:bg-slate-50" disabled={loading} onClick={() => loadStats()} type="button">
              <RefreshCw aria-hidden="true" className={loading ? "animate-spin" : ""} size={16} /> Refresh
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-bold transition hover:bg-slate-50" onClick={handleLogout} type="button">
              <LogOut aria-hidden="true" size={16} /> Log out
            </button>
          </div>
        </header>

        {error && <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p>}

        <section className="mb-6 grid gap-4 sm:grid-cols-2" aria-label="View summary">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(10,41,85,0.06)]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500"><Eye aria-hidden="true" size={17} /> All-time views</div>
            <p className="mt-3 text-4xl font-bold tabular-nums">{formatNumber(stats.total)}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(10,41,85,0.06)]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500"><BarChart3 aria-hidden="true" size={17} /> Today&apos;s views</div>
            <p className="mt-3 text-4xl font-bold tabular-nums">{formatNumber(stats.daily?.[today])}</p>
          </article>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(10,41,85,0.06)]">
          <h2 className="p-5 text-lg font-bold">Daily views</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead><tr className="border-t border-slate-200 text-left text-xs uppercase tracking-[0.12em] text-slate-500"><th className="px-5 py-3">Date</th><th className="px-5 py-3 text-right">Views</th></tr></thead>
              <tbody>
                {dailyRows.length ? dailyRows.map(([date, views]) => (
                  <tr className={`border-t border-slate-200 ${date === today ? "bg-green-50" : ""}`} key={date}>
                    <td className="px-5 py-3.5">{date}{date === today && <span className="ml-2 rounded-full bg-[#23b65f] px-2 py-0.5 text-xs font-bold text-white">Today</span>}</td>
                    <td className="px-5 py-3.5 text-right font-semibold tabular-nums">{formatNumber(views)}</td>
                  </tr>
                )) : (
                  <tr><td className="border-t border-slate-200 px-5 py-10 text-center text-slate-500" colSpan="2">No views recorded yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
        <p className="mt-4 text-xs text-slate-500">Last counter update: {updatedAt} IST</p>
      </div>
    </main>
  );
};

export default AdminViews;
