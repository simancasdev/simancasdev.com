import {Container} from "./styled";
import {Children} from "@/src/interfaces";
import {CSSProperties, ReactNode} from "react";

interface ColumnProps extends Children<ReactNode>, CSSProperties {}

export const Column: React.FC<ColumnProps> = (props) => {
  const {children, ...style} = props;
  const {display = "flex", flexDirection = "column"} = style;
  return (
    <Container children={children} style={{...style, display, flexDirection}} />
  );
};
