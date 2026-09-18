import { Cpu, Fuel, Leaf } from "lucide-react";

export const technologies = [
  {
    id: 1,
    title: "Carbon Capture",
    description:
      "Our proprietary Direct Separation technology captures CO₂ directly from hard-to-abate industrial sources at significantly lower cost and converts it into valuable green methanol.",
    icon: Leaf,
    iconBg: "bg-[#1d6903]/10",
    iconColor: "text-[#1d6903]",
  },
  {
    id: 2,
    title: "Green E-Fuels",
    description:
      "We produce green methanol using captured CO₂ and solar-powered green hydrogen — a drop-in fuel for shipping, chemicals, and heavy transport.",
    icon: Fuel,
    iconBg: "bg-[#0a2955]/10",
    iconColor: "text-[#0a2955]",
  },
  {
    id: 3,
    title: "Fuel Cell Systems",
    description:
      "We develop reliable, zero-emission power systems for remote and auxiliary applications, enabling energy independence in areas with unreliable grid access.",
    icon: Cpu,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];