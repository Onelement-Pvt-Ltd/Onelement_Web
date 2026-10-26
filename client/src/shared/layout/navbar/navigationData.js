import { Building2, FlaskConical, Focus } from "lucide-react";
import MeaningIcon from "@/shared/icons/company/MeaningIcon";
import {
  DownstreamProductsIcon,
  GreenHydrogenIcon,
  IndustrialCaptureIcon,
} from "@/shared/icons/technology/TechnologyIcons";

export const Menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Company",
    path: "/about",
    subMenu: [
      {
        name: "About Us",
        icon: Building2,
        path: "/about#about-us",
      },
      {
        name: "What We Mean",
        icon: MeaningIcon,
        path: "/about#what-we-mean",
      },
      {
        name: "Where We Focus",
        icon: Focus,
        path: "/about#where-we-focus",
      },
    ],
  },
  {
    name: "Technologies",
    path: "/technologies",
    subMenuHeading: ["", ""],
    subMenu: [
      {
        name: "Carbon Capture",
        icon: IndustrialCaptureIcon,
        type: "Society",
        path: "/technologies/details/carbon-capture",
      },
      {
        name: "E-Fuel",
        icon: FlaskConical,
        type: "Council",
        path: "/technologies/details/efuel",
      },
      {
        name: "PEM Fuel Cell",
        icon: DownstreamProductsIcon,
        type: "Society",
        path: "/technologies/details/pem-fuel-cell",
      },
      {
        name: "GH2",
        icon: GreenHydrogenIcon,
        type: "Society",
        path: "/technologies/details/gh2",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Articles",
    path: "/articles",
    gridCols: 1,
  }
];
