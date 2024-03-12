import {Container} from "./styled";
import {CSSProperties} from "react";
import {Children} from "@/src/interfaces";

interface ColumnProps extends Children<any>, CSSProperties {}

export const Column: React.FC<ColumnProps> = (props) => {
  const {children, ...style} = props;
  const {display = "flex", flexDirection = "column"} = style;
  return (
    <Container children={children} style={{...style, display, flexDirection}} />
  );
};
