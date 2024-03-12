import {Typography} from "..";
import {hrefs} from "./helper";
import {Container, Href} from "./styled";
import {usePathname} from "next/navigation";

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  const pathname = usePathname();

  return (
    <Container
      gap={25}
      children={hrefs.map(({label, link}, key) => (
        <Href
          key={key}
          href={link}
          $current={pathname === link}
          children={<Typography>{label}</Typography>}
        />
      ))}
    />
  );
};
