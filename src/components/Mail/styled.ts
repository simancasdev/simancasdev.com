import {theme} from "@/src/styles";
import styled from "styled-components";

export const Container = styled.div`
  right: 2rem;
  bottom: 2rem;
  width: 457px;
  position: fixed;
  padding: 2rem 1.5rem;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: ${theme["primary"]};
`;
