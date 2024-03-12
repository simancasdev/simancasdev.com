import {theme} from "@/src/styles";
import styled from "styled-components";

export const Container = styled.div`
  gap: 0.5rem;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  max-width: 223px;
  border-radius: 5px;
  flex-direction: column;
  background-color: ${theme["secondary"]};
  transition: all ease 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;
