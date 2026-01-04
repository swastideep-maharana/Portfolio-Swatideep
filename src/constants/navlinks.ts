import {
  IconHome,
  IconBriefcase,
  IconUser,
  IconMail,
  IconRocket
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
    label: "Freelance",
    href: "/#freelance",
    icon: IconRocket,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: IconMail,
  },
];
