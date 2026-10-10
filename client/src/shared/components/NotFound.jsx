import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/shared/seo/Seo";

const NotFound = () => (
  <main className="grid min-h-screen place-items-center bg-[#f6f8f6] px-6 py-28 text-[#0a2955]">
    <Seo
      title="Page Not Found"
      description="The requested page could not be found."
      path={window.location.pathname}
      noindex
    />
    <section className="w-full max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#1d6903]">Error 404</p>
      <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">This page has moved beyond the grid.</h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
        The address may be incorrect or the page may no longer be available.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a2955] px-6 py-3 font-bold text-white transition-colors hover:bg-[#163B22]"
        >
          <Home aria-hidden="true" size={18} /> Home page
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 rounded-full border border-[#0a2955]/20 bg-white px-6 py-3 font-bold transition-colors hover:bg-[#eaf1e7]"
        >
          <ArrowLeft aria-hidden="true" size={18} /> Go back
        </button>
      </div>
    </section>
  </main>
);

export default NotFound;
