import {Fragment} from "react";
import {HOME_SERVICES, BENEFITS} from "./_home/helper";
import {Card, Column, Row, Typography} from "../components";

export default function Home() {
  return (
    <Fragment>
      <Column gap={40}>
        <Column gap={15}>
          <Typography variant="title">What do you need?</Typography>
          <Row gap={10}>
            {HOME_SERVICES.map((item, key) => (
              <Card key={key} {...item} />
            ))}
          </Row>
        </Column>
        <Column gap={20} maxWidth="650px">
          <Typography variant="title">
            What do you should expect for me?
          </Typography>
          <Column gap={25}>
            {BENEFITS.map(({icon, label}, key) => (
              <Row key={key} gap={20}>
                {icon}
                <Typography>{label}</Typography>
              </Row>
            ))}
          </Column>
        </Column>
      </Column>
    </Fragment>
  );
}
