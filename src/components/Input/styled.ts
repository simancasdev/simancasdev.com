import {Column} from "..";
import {theme} from "@/src/styles";
import styled from "styled-components";

export const Container = styled(Column)``;

export const InputStyled = styled.input`
  font-family: inherit;
  background-color: unset;
  outline: none;
  border: unset;
  border: 2px solid ${theme["white"]};
  border-radius: 5px;
  padding: 0.8rem;
  font-weight: 400;
  font-size: 1rem;
  color: ${theme["white"]};
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;
