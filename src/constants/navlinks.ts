import {
  IconHome,
  IconBriefcase,
  IconUser,
  IconMail,
} from "@tabler/icons-react";
import { Navlink } from "@/types/navlink";

export const navlinks: Navlink[] = [
  {
    label: "Home",
    href: "/",
    icon: IconHome,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: IconBriefcase,
  },
  {
    label: "About",
    href: "/about",
    icon: IconUser,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: IconMail,
  },
];
