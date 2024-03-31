import {Fragment} from "react";
import {OPTIONS} from "./helper";
import {Container} from "./styled";
import {Send} from "react-feather";
import {theme} from "@/src/styles";
import {useMail} from "@/src/context";
import {Column, Input, Dropdown, Typography, Button, Overlap} from "..";

interface MailProps {}

export const Mail: React.FC<MailProps> = () => {
  const {isOpen, toggle} = useMail();
  return isOpen ? (
    <Overlap onClick={toggle}>
      <Container>
        <Column gap={20}>
          <Column>
            <Typography variant="title">New Message</Typography>
            <Typography fontWeight="300">
              Hey, Simancasdev. I want to talk about
            </Typography>
          </Column>
          <Column gap={15}>
            <Input autoFocus placeholder="My new project" />
            <Dropdown
              options={OPTIONS}
              onSelect={(option) => {
                console.log(option);
              }}
            />
            <Input placeholder="Do you want to add more description about it?" />
            <Input label="Last but not least" placeholder="my@email.com" />
          </Column>
          <Button
            label="Send"
            onClick={() => {}}
            icon={<Send color={theme["white"]} />}
          />
        </Column>
      </Container>
    </Overlap>
  ) : (
    <Fragment />
  );
};
