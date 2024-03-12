import {Column} from "..";
import styled from "styled-components";

export const Container = styled(Column)``;

export const InputStyled = styled.input`
  font-family: inherit;
  background-color: unset;
  outline: none;
  border: unset;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 0.8rem;
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;
