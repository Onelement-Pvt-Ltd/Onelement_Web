import { ShieldPlus, Users, Dessert, Lock } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
    subMenu: [
      {
        name: "Teams",
        icon: ShieldPlus,
        type: "Society",
        path: "/teams",
      }
    ]
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
        path: "/details/carbon-capture",
      },
      {
        name: "PEM Fuel Cell",
        icon: Users,
        type: "Society",
        path: "/details/pem-fuel-cell",
      },
      {
        name: "GH2",
        icon: Dessert,
        type: "Society",
        path: "/details/gh2",
      },
      {
        name: "EFUEL",
        icon: Lock,
        type: "Council",
        path: "/details/efuel",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Blogs",
    path: "/blogs",
    gridCols: 1,
  }
];