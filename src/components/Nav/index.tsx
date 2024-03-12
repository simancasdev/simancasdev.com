import {Typography} from "..";
import {hrefs} from "./helper";
import {Container, Href} from "./styled";

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  return (
    <Container
      gap={25}
      children={hrefs.map(({label, link}, key) => (
        <Href
          key={key}
          href={link}
          children={<Typography>{label}</Typography>}
        />
      ))}
    />
  );
};
