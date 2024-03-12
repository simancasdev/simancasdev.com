import {DropdownOption} from "..";
import {theme} from "@/src/styles";
import {Monitor, Server, Smartphone} from "react-feather";

export const OPTIONS: DropdownOption[] = [
  {
    value: "web_development",
    label: "Web development",
    icon: <Monitor color={theme["white"]} />,
  },
  {
    value: "mobile_development",
    label: "Mobile development",
    icon: <Smartphone color={theme["white"]} />,
  },
  {
    value: "backend_development",
    label: "Backend development",
    icon: <Server color={theme["white"]} />,
  },
];
