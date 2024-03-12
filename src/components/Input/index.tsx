import {Typography} from "..";
import {InputHTMLAttributes} from "react";
import {Container, InputStyled} from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const {label, ...inputProps} = props;
  const {type = "text", placeholder = "Write something"} = inputProps;
  return (
    <Container gap={5}>
      {label && <Typography fontWeight="300">{label}</Typography>}
      <InputStyled {...inputProps} type={type} placeholder={placeholder} />
    </Container>
  );
};
