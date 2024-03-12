import {Container} from "./styled";
import {Children} from "@/src/interfaces";
import {CSSProperties, ReactNode} from "react";

interface RowProps extends Children<ReactNode>, CSSProperties {}

export const Row: React.FC<RowProps> = (props) => {
  const {children, ...style} = props;
  const {display = "flex", alignItems = "center"} = style;
  return (
    <Container children={children} style={{...style, display, alignItems}} />
  );
};
