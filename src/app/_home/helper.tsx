import {theme} from "../../styles/theme";
import {CardProps, Row} from "@/src/components";
import {
  Book,
  Code,
  Server,
  Monitor,
  Package,
  IconProps,
  ChevronUp,
  Smartphone,
  Thermometer,
} from "react-feather";

const iconProps: IconProps = {
  size: 40,
  color: theme["white"],
};

const footerIconProps: IconProps = {
  color: theme["white"],
};

const Footer = (): JSX.Element => (
  <Row justifyContent="center" children={<ChevronUp {...footerIconProps} />} />
);

export const HOME_SERVICES: CardProps[] = [
  {
    footer: <Footer />,
    title: "Web Development",
    icon: <Monitor {...iconProps} />,
    description: "Let’s create an awesome User Interface with React",
  },
  {
    footer: <Footer />,
    title: "Mobile Development",
    icon: <Smartphone {...iconProps} />,
    description: "Let’s create your dream mobile app with React Native",
  },
  {
    footer: <Footer />,
    title: "Backend Development",
    icon: <Server {...iconProps} />,
    description: "Let’s create a good API services for your app’s with Node",
  },
];

type Benefit = {
  label: string;
  icon: JSX.Element;
};

const benefitIconProps: IconProps = {
  size: 30,
  color: theme["white"],
};

export const benefits: Benefit[] = [
  {
    icon: <Code {...benefitIconProps} />,
    label:
      "All your code will be created with Design patterns, SOLID principles, in a nutshell, good practices",
  },
  {
    icon: <Book {...benefitIconProps} />,
    label:
      "Documentation. Yes, I’ll give you all the code documentation so your further maintainers will be happy",
  },
  {
    icon: <Package {...benefitIconProps} />,
    label: "All the source code of your project",
  },
  {
    icon: <Thermometer {...benefitIconProps} />,
    label:
      "A project well tested so you will have the guarantee that everything is working as you expected",
  },
];
