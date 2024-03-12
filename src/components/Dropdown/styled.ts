import {theme} from "@/src/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Field = styled.div`
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.8rem;
  font-weight: 400;
  border-radius: 5px;
  border: 2px solid #fff;
  justify-content: space-between;
`;

export const DropdownStyled = styled.div`
  left: 50%;
  width: 85%;
  z-index: 2;
  top: 60px;
  border-radius: 5px;
  position: absolute;
  transform: translateX(-50%);
  background-color: ${theme["primary"]};
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const DropdownItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${theme["secondary"]};
  }
`;
