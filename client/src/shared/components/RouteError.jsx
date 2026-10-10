import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Seo from "@/shared/seo/Seo";

const RouteError = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;

  return (
    <main className="grid min-h-screen place-items-center bg-[#f6f8f6] px-6 text-center text-[#0a2955]">
      <Seo title="Unable to Load Page" description="This page is temporarily unavailable." path={window.location.pathname} noindex />
      <section className="max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1d6903]">Error {status}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">We could not load this page.</h1>
        <p className="mt-5 leading-7 text-slate-600">Please try again, or return to the home page.</p>
        <Link className="mt-8 inline-flex rounded-full bg-[#0a2955] px-6 py-3 font-bold text-white" to="/">Return home</Link>
      </section>
    </main>
  );
};

export default RouteError;
