import { ArrowLeft, RotateCw } from "lucide-react";
import Seo from "@/shared/seo/Seo";

const PublicError = ({ resource = "page", onRetry }) => {
  const resourceName = resource === "article" ? "article" : resource === "technology" ? "technology" : "page";

  return (
    <main className="grid min-h-[calc(100svh-4rem)] place-items-center bg-[#f4f7f3] px-6 py-24 text-[#0a2955]">
      <Seo
        title="Temporarily Unavailable"
        description="This content is temporarily unavailable."
        path={window.location.pathname}
        noindex
      />
      <section className="w-full max-w-2xl border-l-4 border-[#23b65f] bg-white p-8 shadow-[0_24px_70px_rgba(10,41,85,.1)] sm:p-12">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#1d6903]">
          Temporarily unavailable
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
          We could not load this {resourceName}.
        </h1>
        <p className="mt-5 max-w-xl leading-7 text-[#0a2955]/65">
          Please try again in a moment. No technical or account action is required from you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-2 rounded-full bg-[#0a2955] px-6 py-3 font-bold text-white transition-colors hover:bg-[#163b22]"
            >
              <RotateCw aria-hidden="true" size={17} /> Try again
            </button>
          )}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-[#0a2955]/16 bg-white px-6 py-3 font-bold transition-colors hover:bg-[#eaf1e7]"
          >
            <ArrowLeft aria-hidden="true" size={17} /> Go back
          </button>
        </div>
      </section>
    </main>
  );
};

export default PublicError;
