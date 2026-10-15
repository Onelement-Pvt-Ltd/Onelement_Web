import {
  Factory,
  FlaskConical,
  Globe2,
  Leaf,
  Scale,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import DownstreamProductsIcon from "./icons/DownstreamProductsIcon";
import GreenHydrogenIcon from "./icons/GreenHydrogenIcon";
import IndiaMapIcon from "./icons/IndiaMapIcon";
import IndustrialCaptureIcon from "./icons/IndustrialCaptureIcon";

const chainItems = [
  {
    number: "01",
    title: "Industrial",
    accentTitle: "CO2 Capture",
    icon: IndustrialCaptureIcon,
    layout: "top",
    position: "left-1/2 top-0 -translate-x-1/2",
    mobilePosition: "left-1/2 top-[5%] -translate-x-1/2",
  },
  {
    number: "02",
    title: "Green Hydrogen",
    accentTitle: "Production",
    icon: GreenHydrogenIcon,
    layout: "right",
    position: "left-[66.4%] top-1/2 -translate-y-1/2",
    mobilePosition: "right-[7.5%] top-1/2 -translate-y-1/2",
  },
  {
    number: "03",
    title: "Utilisation",
    icon: FlaskConical,
    layout: "bottom",
    position: "bottom-[2.5%] left-1/2 -translate-x-1/2",
    mobilePosition: "bottom-[2%] left-1/2 -translate-x-1/2",
  },
  {
    number: "04",
    title: "Downstream",
    accentTitle: "Products",
    detail: "Fuel cells /",
    accentDetail: "Clean energy",
    icon: DownstreamProductsIcon,
    layout: "left",
    position: "left-[4.9%] top-1/2 -translate-y-1/2",
    mobilePosition: "left-[7.5%] top-1/2 -translate-y-1/2",
  },
];

const impactItems = [
  { title: "SDG 7", detail: "Affordable and clean energy", icon: Zap },
  { title: "SDG 9", detail: "Industry, innovation and infrastructure", icon: Factory },
  { title: "SDG 13", detail: "Climate action", icon: Scale },
  { title: "India", detail: "Net zero", accentDetail: "2070", icon: IndiaMapIcon, iconSize: 36 },
  { title: "Global", detail: "Net zero", accentDetail: "2050", icon: Globe2 },
];

const ChainNode = ({ item, index, mobile = false, reduceMotion }) => {
  const Icon = item.icon;
  const isTop = item.layout === "top";
  const isVertical = item.layout === "bottom";
  const isLeft = item.layout === "left";
  const isRight = item.layout === "right";
  const isReversed = item.layout === "left";

  const mobileTextPosition = isLeft
    ? "absolute bottom-[calc(100%_+_.35rem)] right-[65%] w-[clamp(4.25rem,20vw,5rem)] text-right"
    : isRight
      ? "absolute left-[65%] top-[calc(100%_+_.35rem)] w-[clamp(4.25rem,20vw,5rem)] text-left"
      : `${isTop ? "order-1" : "order-2"} min-w-0`;

  if (mobile) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.5 }}
        className={`absolute flex w-[24%] min-w-0 flex-col items-center gap-2 text-center ${item.mobilePosition}`}
      >
        <div className={`relative mx-auto h-[clamp(2.65rem,14vw,4rem)] w-[clamp(2.65rem,14vw,4rem)] ${isTop ? "order-2" : "order-1"}`}>
          <span className="absolute inset-0 rounded-full border border-dashed border-white/45" />
          <span className="absolute inset-1.5 grid place-items-center rounded-full border border-[#36536f] bg-[#0b2949] text-white">
            <Icon className="h-[60%] w-[60%]" size={20} strokeWidth={1.65} />
          </span>
          <span className="absolute -right-1 -top-1.5 grid h-[clamp(1.25rem,6vw,1.75rem)] w-[clamp(1.25rem,6vw,1.75rem)] place-items-center rounded-full bg-[#57ddb0] text-[clamp(8px,2.5vw,10px)] font-bold text-[#061a36] shadow-[0_0_0_3px_#061a36]">
            {item.number}
          </span>
        </div>
        <div className={mobileTextPosition}>
          <p className="text-[clamp(6.5px,2.1vw,10px)] font-bold uppercase leading-tight text-white">
            <span className="block">{item.title}</span>
            {item.accentTitle && <span className="block text-[#57ddb0]">{item.accentTitle}</span>}
          </p>
          {item.detail && (
            <p className="mt-1 text-[clamp(6px,1.9vw,9px)] font-semibold uppercase leading-tight text-white/75">
              <span className="block">{item.detail}</span>
              <span className="block text-[#57ddb0]">{item.accentDetail}</span>
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: 0.55 }}
      className={`absolute w-[28.8%] ${item.position}`}
    >
      <div
        className={`flex items-center ${isTop ? "flex-col-reverse gap-[clamp(.35rem,1vw,.5rem)]" : "gap-[clamp(.5rem,1.6vw,1rem)]"} ${isVertical ? "flex-col" : ""} ${
          isReversed ? "flex-row-reverse" : ""
        }`}
      >
        <div className="relative aspect-square w-1/3 shrink-0">
          <span className="absolute inset-0 rounded-full border border-dashed border-white/45" />
          <span className="absolute inset-2 grid place-items-center rounded-full border border-[#36536f] bg-[#0b2949] text-white">
            <Icon className="h-[60%] w-[60%]" size={30} strokeWidth={1.65} />
          </span>
          <span className="absolute -right-1 -top-2 grid h-[clamp(1.5rem,3.6vw,2.25rem)] w-[clamp(1.5rem,3.6vw,2.25rem)] place-items-center rounded-full bg-[#57ddb0] text-[clamp(.625rem,1.4vw,.875rem)] font-bold text-[#061a36] shadow-[0_0_0_4px_#061a36]">
            {item.number}
          </span>
        </div>

        <div className={isTop || isVertical ? "text-center" : isReversed ? "text-right" : "text-left"}>
          <p className="home-display text-[clamp(.75rem,1.8vw,1.25rem)] font-bold uppercase leading-tight text-white">
            <span className="block">{item.title}</span>
            {item.accentTitle && <span className="block text-[#57ddb0]">{item.accentTitle}</span>}
          </p>
          {item.detail && (
            <p className="mt-2 text-[clamp(.55rem,1.1vw,.75rem)] font-semibold uppercase tracking-[0.12em] text-white/75">
              <span className="block">{item.detail}</span>
              <span className="block text-[#57ddb0]">{item.accentDetail}</span>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MissionGrid = () => {
  const reduceMotion = useReducedMotion();

  return (
    <figure className="relative left-1/2 mt-[clamp(1.5rem,3.5vw,3.5rem)] w-screen -translate-x-1/2 overflow-hidden bg-[linear-gradient(180deg,rgba(7,31,65,0)_0%,rgba(6,26,54,.72)_18%,rgba(6,26,54,.9)_50%,rgba(6,26,54,.72)_82%,rgba(7,31,65,0)_100%)] px-[clamp(1rem,4vw,4rem)] py-[clamp(1.25rem,4vw,4rem)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,220,121,.1),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative mx-auto hidden aspect-[20/13] w-full max-w-[1000px] md:block">
          <svg
            viewBox="0 0 1000 650"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <marker id="mission-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                <path d="M0 0L9 4.5L0 9Z" fill="#57ddb0" />
              </marker>
              <linearGradient id="mission-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#57ddb0" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <circle cx="500" cy="325" r="188" fill="none" stroke="#ffffff" strokeOpacity="0.32" strokeDasharray="6 8" />
            <circle cx="500" cy="325" r="168" fill="none" stroke="#36536f" strokeWidth="2" />
            <path d="M551 120.3 A211 211 0 0 1 704.7 273.9" fill="none" stroke="url(#mission-ring)" strokeWidth="3" markerEnd="url(#mission-arrow)" />
            <path d="M704.7 376.1 A211 211 0 0 1 551 529.7" fill="none" stroke="url(#mission-ring)" strokeWidth="3" markerEnd="url(#mission-arrow)" />
            <path d="M449 529.7 A211 211 0 0 1 295.3 376.1" fill="none" stroke="url(#mission-ring)" strokeWidth="3" markerEnd="url(#mission-arrow)" />
            <path d="M295.3 273.9 A211 211 0 0 1 449 120.3" fill="none" stroke="url(#mission-ring)" strokeWidth="3" markerEnd="url(#mission-arrow)" />
          </svg>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 grid h-[44.3%] w-[28.8%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/80 bg-[#031329] text-center shadow-[inset_0_0_0_14px_#071a35,0_0_70px_rgba(47,220,121,.08)]"
          >
            <span className="absolute -inset-4 rounded-full border border-dashed border-white/38" />
            <div>
              <p className="home-display text-[clamp(1.6rem,3.4vw,2.25rem)] font-medium tracking-tight text-white">CCUS</p>
              <p className="home-display mt-1 text-[clamp(1rem,2.2vw,1.5rem)] font-bold text-white">VALUE CHAIN</p>
              <span className="mx-auto mt-[clamp(.75rem,2vw,1.25rem)] block h-px w-1/3 bg-[#57ddb0]" />
              <Leaf className="mx-auto mt-[clamp(.6rem,1.6vw,1rem)] h-[clamp(1.5rem,3.4vw,2.125rem)] w-[clamp(1.5rem,3.4vw,2.125rem)] text-[#57ddb0]" strokeWidth={1.6} />
            </div>
          </motion.div>

          {chainItems.map((item, index) => (
            <ChainNode
              key={item.number}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[430px] md:hidden">
          <svg viewBox="0 0 430 430" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <marker id="mission-arrow-mobile" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 0L8 4L0 8Z" fill="#57ddb0" />
              </marker>
              <linearGradient id="mission-ring-mobile" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.88" />
                <stop offset="100%" stopColor="#57ddb0" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <circle cx="215" cy="215" r="109" fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeDasharray="5 7" />
            <circle cx="215" cy="215" r="94" fill="none" stroke="#36536f" strokeWidth="2" />
            <path d="M246.7 87.9 A131 131 0 0 1 342.1 183.3" fill="none" stroke="url(#mission-ring-mobile)" strokeWidth="2.2" markerEnd="url(#mission-arrow-mobile)" />
            <path d="M342.1 246.7 A131 131 0 0 1 246.7 342.1" fill="none" stroke="url(#mission-ring-mobile)" strokeWidth="2.2" markerEnd="url(#mission-arrow-mobile)" />
            <path d="M183.3 342.1 A131 131 0 0 1 87.9 246.7" fill="none" stroke="url(#mission-ring-mobile)" strokeWidth="2.2" markerEnd="url(#mission-arrow-mobile)" />
            <path d="M87.9 183.3 A131 131 0 0 1 183.3 87.9" fill="none" stroke="url(#mission-ring-mobile)" strokeWidth="2.2" markerEnd="url(#mission-arrow-mobile)" />
          </svg>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="absolute left-1/2 top-1/2 grid h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/80 bg-[#031329] text-center shadow-[inset_0_0_0_8px_#071a35]"
          >
            <span className="absolute -inset-2 rounded-full border border-dashed border-white/35" />
            <div>
              <p className="home-display text-xl text-white sm:text-2xl">CCUS</p>
              <p className="home-display mt-0.5 text-xs font-bold text-white sm:text-sm">VALUE CHAIN</p>
              <Leaf className="mx-auto mt-2 text-[#57ddb0]" size={22} />
            </div>
          </motion.div>

          {chainItems.map((item, index) => (
            <ChainNode
              key={item.number}
              item={item}
              index={index}
              mobile
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="mt-[clamp(1.5rem,6vw,2.5rem)] grid gap-[clamp(.75rem,3.5vw,2rem)] border-t border-[#36536f]/70 pt-[clamp(1.25rem,5vw,3rem)] sm:grid-cols-2 lg:grid-cols-5">
          {impactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: 0.5 }}
                className="flex min-w-0 items-center gap-[clamp(.75rem,3vw,1rem)]"
              >
                <span className="grid h-[clamp(2.75rem,13vw,3.5rem)] w-[clamp(2.75rem,13vw,3.5rem)] shrink-0 place-items-center rounded-full border border-[#57ddb0]/70 bg-[#0b2949] text-[#57ddb0]">
                  <Icon className="h-[52%] w-[52%]" size={item.iconSize ?? 25} strokeWidth={1.55} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[clamp(1rem,5vw,1.125rem)] font-bold uppercase leading-tight text-white">{item.title}</span>
                  <span className="mt-1 block text-[clamp(.625rem,3vw,.75rem)] uppercase leading-[1.55] tracking-[0.08em] text-white/65">
                    {item.detail}{" "}
                    {item.accentDetail && <span className="font-semibold text-[#57ddb0]">{item.accentDetail}</span>}
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </figure>
  );
};

export default MissionGrid;
