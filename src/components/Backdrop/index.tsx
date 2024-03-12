import {Container} from "./styled";

interface BackdropProps {
  onClick?: () => void;
  backgroundColor?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  backgroundColor,
}) => {
  return <Container onClick={onClick} style={{backgroundColor}} />;
};
