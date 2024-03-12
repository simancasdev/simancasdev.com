import {Backdrop} from "..";
import {ReactNode} from "react";
import {Container} from "./styled";
import {Children} from "@/src/interfaces";

interface OverlapProps extends Children<ReactNode> {
  onClick?: () => void;
  backgroundColor?: string;
}

export const Overlap: React.FC<OverlapProps> = ({
  children,
  onClick,
  backgroundColor = "rgba(0,0,0, .6)",
}) => {
  return (
    <Container style={{backgroundColor}}>
      {children}
      <Backdrop onClick={onClick} />
    </Container>
  );
};
