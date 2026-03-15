import {
  Bolt,
  CalendarClock,
  CalendarCheck,
  CalendarArrowDownIcon,
} from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";
import { Link } from "react-router-dom";


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
      }]
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
        path: "/carbon-capture",
      },
      {
        name: "PEM Fuel Cell",
        icon: Users,
        type: "Society",
        path: "/pem-fuel-cell",
      },
      {
        name: "GH2",
        icon: Dessert,
        type: "Society",
        path: "/gh2",
      },
      {
        name: "EFUEL",
        icon: Lock,
        type: "Council",
        path: "/efuel",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Blogs",
    path: "/event",
    gridCols: 1,
  }
];