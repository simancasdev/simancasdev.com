import {CardProps, Row} from "@/src/components";
import {ChevronUp, IconProps, Monitor, Server, Smartphone} from "react-feather";

const iconProps: IconProps = {
  color: "#fff",
  size: 40,
};

const footerIconProps: IconProps = {
  color: "#fff",
};

export const HOME_SERVICES: CardProps[] = [
  {
    title: "Web Development",
    icon: <Monitor {...iconProps} />,
    description: "Let’s create an awesome User Interface with React",
    footer: (
      <Row
        justifyContent="center"
        children={<ChevronUp {...footerIconProps} />}
      />
    ),
  },
  {
    title: "Mobile Development",
    icon: <Smartphone {...iconProps} />,
    description: "Let’s create your dream mobile app with React Native",
    footer: (
      <Row
        justifyContent="center"
        children={<ChevronUp {...footerIconProps} />}
      />
    ),
  },
  {
    title: "Backend Development",
    icon: <Server {...iconProps} />,
    description: "Let’s create a good API services for your app’s with Node",
    footer: (
      <Row
        justifyContent="center"
        children={<ChevronUp {...footerIconProps} />}
      />
    ),
  },
];
