import {Typography} from "..";
import {Container} from "./styled";

export interface CardProps {
  title: string;
  icon?: JSX.Element;
  description: string;
  footer?: JSX.Element;
}

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  footer,
  description,
}) => {
  return (
    <Container>
      {icon}
      <Typography fontSize={22}>{title}</Typography>
      <Typography fontWeight="300" fontSize={16}>
        {description}
      </Typography>
      {footer}
    </Container>
  );
};
