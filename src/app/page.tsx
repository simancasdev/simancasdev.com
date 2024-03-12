import {Fragment} from "react";
import {HOME_SERVICES} from "./_home/helper";
import {Card, Column, Row, Typography} from "../components";

export default function Home() {
  return (
    <Fragment>
      <Column gap={15}>
        <Typography variant="title">What do you need?</Typography>
        <Row gap={10}>
          {HOME_SERVICES.map((item, key) => (
            <Card key={key} {...item} />
          ))}
        </Row>
      </Column>
    </Fragment>
  );
}
