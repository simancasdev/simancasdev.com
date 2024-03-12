import {Row, Typography, TypographyProps} from "..";
import {ButtonStyled} from "./styled";
import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: JSX.Element;
  typographyProps?: TypographyProps;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {label, icon, typographyProps, ...buttonProps} = props;
  return (
    <ButtonStyled
      children={
        <Row gap={10} justifyContent="center">
          {icon && icon}
          <Typography {...typographyProps}>{label}</Typography>
        </Row>
      }
      {...buttonProps}
    />
  );
};
