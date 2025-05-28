import { TablerIconsProps } from "@tabler/icons-react";

export interface Navlink {
  label: string;
  href: string;
  icon: (props: TablerIconsProps) => JSX.Element;
}
