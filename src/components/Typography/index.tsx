import {theme} from "@/src/styles";
import {fontSizeObj} from "./helper";
import {Children} from "@/src/interfaces";
import {TypographyVariant} from "./types";
import {CSSProperties, ReactNode} from "react";

export interface TypographyProps extends Children<ReactNode>, CSSProperties {
  variant?: TypographyVariant;
}

export const Typography: React.FC<TypographyProps> = (props) => {
  const {children, variant = "normal", ...style} = props;
  const {color = theme["white"], fontSize = fontSizeObj[variant]} = style;

  return <span children={children} style={{...style, color, fontSize}} />;
};
