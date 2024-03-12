import {Row} from "../Row";
import Link from "next/link";
import {theme} from "@/src/styles";
import styled from "styled-components";

export const Container = styled(Row)``;

export const Href = styled(Link)<{$current: boolean}>`
  color: unset;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  background-color: unset;

  &::after {
    left: 0;
    height: 2px;
    content: "";
    bottom: -2px;
    position: absolute;
    border-radius: 10px;
    transition: all ease 0.3s;
    background-color: ${theme["white"]};
    width: ${(props) => (props.$current ? "100%" : "0%")};
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
