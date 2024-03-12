import {Container} from "./styled";
import {CSSProperties} from "react";
import {Children} from "@/src/interfaces";

type TypographyVariant = "title" | "subtitle" | "normal";

interface TypographyProps extends Children<any>, CSSProperties {
  variant?: TypographyVariant;
}

const fontSizeObj: {[V in TypographyVariant]: number} = {
  title: 28,
  normal: 18,
  subtitle: 22,
};

export const Typography: React.FC<TypographyProps> = (props) => {
  const {children, variant = "normal", ...style} = props;
  const {color = "#fff", fontSize = fontSizeObj[variant]} = style;
  return <Container children={children} style={{...style, color, fontSize}} />;
};
