import {Mail} from "react-feather";
import {theme} from "@/src/styles";
import {useMail} from "@/src/context";
import {Button, Column, Typography} from "..";
import {Container, ReactImage} from "./styled";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  const {toggle} = useMail();
  return (
    <Container>
      <ReactImage
        width={55}
        height={50}
        alt="react-icon"
        src="/react-icon.png"
      />
      <Column marginTop={10} gap={15}>
        <Column>
          <Typography variant="title" fontWeight="800">
            Simancasdev
          </Typography>
          <Typography marginBottom={10}>Senior Software developer</Typography>
        </Column>
        <Column gap={10}>
          <Button
            onClick={toggle}
            label="Talk with me"
            icon={<Mail color={theme["white"]} />}
            style={{
              maxWidth: "155px",
              backgroundColor: theme["secondary"],
            }}
          />
          <Typography fontWeight="300" fontSize={14}>
            whenever you're ready
          </Typography>
        </Column>
      </Column>
    </Container>
  );
};
