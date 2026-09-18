import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe2, Instagram, Linkedin, Quote, Twitter, X } from "lucide-react";
import dummy from "../../../assets/dummy.png";

const teamMembers = Array.from({ length: 6 }).map((_, index) => ({
  id: index + 1,
  name: "Akhilesh Sambhoju",
  role: "CEO / Founder",
  image: dummy,
  quote: "Man is wolf to man",
  links: {
    linkedin: "https://in.linkedin.com/in/akhilesh-samboju-8026ba117",
    x: null,
    instagram: null,
    portfolio: null,
  },
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A harum rem suscipit officiis ducimus. Rem rerum eos deserunt explicabo quia, commodi dolor quasi eligendi ab facere dignissimos deleniti quisquam blanditiis.autem ad atque nihil harum! Tenetur adipisci vitae modi exercitationem sint eos nisi cupiditate optio.",
}));

const cardMotion = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const socialPlatforms = [
  { key: "linkedin", label: "LinkedIn", icon: Linkedin },
  { key: "x", label: "X", icon: Twitter },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "portfolio", label: "Portfolio", icon: Globe2 },
];

const getMemberLinks = (member) =>
  socialPlatforms.filter(({ key }) => member.links?.[key]);

const TeamCard = ({ member, featured = false, onSelect, reduceMotion }) => (
  <motion.article
    variants={cardMotion}
    whileHover={reduceMotion ? undefined : { y: -6 }}
    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    className={`group relative w-full overflow-hidden rounded-[1.6rem] bg-white text-left shadow-[0_12px_40px_rgba(10,41,85,0.08)] ring-1 ring-[#0a2955]/8 transition-shadow hover:shadow-[0_20px_55px_rgba(10,41,85,0.14)] ${
      featured ? "min-h-[440px]" : "min-h-[360px]"
    }`}
  >
    <button
      type="button"
      onClick={() => onSelect(member)}
      aria-label={member.name + " profile"}
      className={`relative block w-full overflow-hidden text-left ${featured ? "h-[330px]" : "h-[260px]"}`}
    >
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071d35]/55 via-transparent to-transparent opacity-70" />
      <span className="absolute left-4 top-4 rounded-full bg-[#0a2955]/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
        {member.role}
      </span>
      <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-white/90 text-[#0a2955] opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ExternalLink size={17} />
      </span>
    </button>

    <div className="relative p-5 sm:p-6">
      <span className="mb-3 block h-0.5 w-9 rounded-full bg-[#61a652] transition-all duration-300 group-hover:w-16" />
      <h3 className="text-xl font-bold tracking-tight text-[#0a2955]">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#1d6903]/80">
        {member.role}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-[#0a2955]/8 pt-4">
        <div className="flex gap-2">
          {getMemberLinks(member).map(({ key, label, icon: Icon }) => (
            <a
              key={key}
              href={member.links[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={member.name + " on " + label}
              title={label}
              className="grid h-9 w-9 place-items-center rounded-full bg-[#eef4ed] text-[#163B22] transition-colors hover:bg-[#163B22] hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onSelect(member)}
          className="flex items-center gap-1.5 text-sm font-bold text-[#0a2955] transition-colors hover:text-[#1d6903]"
        >
          View profile
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  </motion.article>
);

export default function Team() {
  const [activeMember, setActiveMember] = useState(null);
  const reduceMotion = useReducedMotion();
  const featuredMembers = teamMembers.slice(0, 3);
  const remainingMembers = teamMembers.slice(3);

  useEffect(() => {
    if (!activeMember) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) =>
      event.key === "Escape" && setActiveMember(null);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMember]);

  return (
    <div className="min-h-screen bg-[#f5f7f3] text-[#0a2955]">
      <section className="relative isolate overflow-hidden bg-[#0a2955] px-6 pb-24 pt-32 text-white sm:pb-28 sm:pt-36">
        <div className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(circle_at_75%_25%,#7bc96f_0,transparent_25%),linear-gradient(120deg,transparent_45%,rgba(255,255,255,.08)_45%,rgba(255,255,255,.08)_46%,transparent_46%)]" />
        <div className="absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full border border-white/10" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#9fdf91]">
              <span className="h-px w-10 bg-[#9fdf91]" />
              The people behind Onelement
            </p>
            <h1 className="text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Who We Are
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Meet the minds turning bold ideas into a cleaner, more sustainable world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 rounded-[2rem] border border-[#0a2955]/8 bg-white p-7 shadow-[0_24px_70px_rgba(10,41,85,0.1)] sm:p-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14 lg:p-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d6903]">
              Who We Are
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0a2955] sm:text-4xl">
              We Engineer a Cleaner Future One step at a time.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              Onelement Energy is a purpose-driven deep-tech cleantech company headquartered in Hyderabad, Telangana. Founded with the belief that technology can solve some of humanity’s greatest challenges, we are committed to developing innovative solutions that combat climate change while creating sustainable economic value.
            </p>
            <p>
              We are a team of passionate engineers, scientists, and entrepreneurs working at the intersection of energy, environment, and industry. we develop breakthrough technologies that turn industrial carbon emissions into valuable resources and clean energy solutions. Our work focuses on three interconnected verticals that address some of the most critical challenges in the global energy transition.
            </p>
          </div>
        </motion.div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d6903]">
              Our Team
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built by people with purpose.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">
            Select a profile to learn more about the people shaping our work.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              featured
              onSelect={setActiveMember}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>

        {remainingMembers.length > 0 && (
          <section className="mt-16 border-t border-[#0a2955]/10 pt-12">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="shrink-0 text-xl font-bold">More people behind the work</h2>
              <span className="h-px w-full bg-[#0a2955]/10" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: reduceMotion ? 0 : 0.06 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {remainingMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onSelect={setActiveMember}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </section>
        )}
      </main>

      <AnimatePresence>
        {activeMember && (
          <motion.div
            className="fixed inset-0 z-[10020] flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-name"
          >
            <motion.button
              type="button"
              aria-label="Close team member profile"
              onClick={() => setActiveMember(null)}
              className="absolute inset-0 cursor-default bg-[#061526]/60 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
            />

            <motion.aside
              initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-full w-full max-w-lg overflow-y-auto bg-[#f7f9f6] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveMember(null)}
                aria-label="Close profile"
                className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[#0a2955] shadow-md backdrop-blur transition-transform hover:scale-105"
              >
                <X size={21} />
              </button>

              <div className="relative h-[42vh] min-h-[300px] overflow-hidden">
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d35]/70 via-transparent to-transparent" />
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1d6903]">
                  {activeMember.role}
                </p>
                <h2
                  id="team-member-name"
                  className="mt-2 text-3xl font-bold tracking-tight text-[#0a2955]"
                >
                  {activeMember.name}
                </h2>

                {getMemberLinks(activeMember).length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {getMemberLinks(activeMember).map(({ key, label, icon: Icon }) => (
                      <a
                        key={key}
                        href={activeMember.links[key]}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#0a2955]/12 bg-white px-4 py-2 text-sm font-semibold text-[#0a2955] transition-colors hover:border-[#163B22] hover:bg-[#163B22] hover:text-white"
                      >
                        <Icon size={16} />
                        {label}
                        <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                )}

                <blockquote className="relative my-8 rounded-2xl bg-[#eaf1e7] p-6 pl-14 text-lg font-semibold leading-7 text-[#163B22]">
                  <Quote
                    size={24}
                    className="absolute left-5 top-6 fill-[#61a652]/25 text-[#61a652]"
                  />
                  “{activeMember.quote}”
                </blockquote>

                <p className="whitespace-pre-line text-base leading-7 text-slate-600">
                  {activeMember.description}
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
