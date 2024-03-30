import {theme} from "@/src/styles";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.3s;
  width: max-content;
  max-width: 700px;
  &:hover {
    background-color: ${theme["secondary"]};
  }
`;
