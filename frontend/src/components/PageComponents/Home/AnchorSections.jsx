// AnchorSections.jsx
import React from "react";

export default function AnchorSections() {
  const sections = ["home", "about", "services", "contact"];

  return (
    <>
      <nav className=" space-x-2">
        {sections.map((s) => (
          <a key={s} href={`#${s}`} className="px-3 py-2 bg-slate-800 text-white rounded">
            {s}
          </a>
        ))}
      </nav>

      <main className="pt-20">
        {sections.map((s) => (
          <section id={s} key={s} className="h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">{s.toUpperCase()}</h2>
          </section>
        ))}
      </main>
    </>
  );
}
