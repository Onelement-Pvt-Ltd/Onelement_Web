import { Building2, Compass, Dessert, Focus, Lock, ShieldPlus, Users } from "lucide-react";

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
        icon: Compass,
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
        icon: ShieldPlus,
        type: "Society",
        path: "/technologies/details/carbon-capture",
      },
      {
        name: "E-Fuel",
        icon: Lock,
        type: "Council",
        path: "/technologies/details/efuel",
      },
      {
        name: "PEM Fuel Cell",
        icon: Users,
        type: "Society",
        path: "/technologies/details/pem-fuel-cell",
      },
      {
        name: "GH2",
        icon: Dessert,
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
