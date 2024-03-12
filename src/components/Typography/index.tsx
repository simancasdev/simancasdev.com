import {CSSProperties} from "react";
import {fontSizeObj} from "./helper";
import {Children} from "@/src/interfaces";
import {TypographyVariant} from "./types";

export interface TypographyProps extends Children<any>, CSSProperties {
  variant?: TypographyVariant;
}

export const Typography: React.FC<TypographyProps> = (props) => {
  const {children, variant = "normal", ...style} = props;
  const {color = "#fff", fontSize = fontSizeObj[variant]} = style;

  return <span children={children} style={{...style, color, fontSize}} />;
};
