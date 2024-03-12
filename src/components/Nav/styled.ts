import {Row} from "../Row";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Row)``;

export const Href = styled(Link)`
  color: unset;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  background-color: unset;

  &::after {
    left: 0;
    width: 0%;
    height: 2px;
    content: "";
    bottom: -2px;
    position: absolute;
    border-radius: 10px;
    transition: all ease 0.3s;
    background-color: #fff; // <-- TODO: create a theme-color helper for all hardcoded colors
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
