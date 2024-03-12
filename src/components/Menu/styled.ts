import Image from "next/image";
import styled from "styled-components";

export const ReactImage = styled(Image)`
  object-fit: contain;
  animation: rotation 6s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  &:hover {
    animation-duration: 12s;
  }
`;

export const Container = styled.div``;
