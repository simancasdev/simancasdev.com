import {DropdownOption} from "..";
import {Monitor, Server, Smartphone} from "react-feather";

export const OPTIONS: DropdownOption[] = [
  {
    value: "web_development",
    label: "Web development",
    icon: <Monitor color="#fff" />,
  },
  {
    value: "mobile_development",
    label: "Mobile development",
    icon: <Smartphone color="#fff" />,
  },
  {
    value: "backend_development",
    label: "Backend development",
    icon: <Server color="#fff" />,
  },
];
