import {Container} from "./styled";
import {CSSProperties} from "react";
import {Children} from "@/src/interfaces";

interface RowProps extends Children, CSSProperties {}

export const Row: React.FC<RowProps> = (props) => {
  const {children, ...style} = props;
  const {display = "flex", alignItems = "center"} = style;
  return (
    <Container children={children} style={{...style, display, alignItems}} />
  );
};
