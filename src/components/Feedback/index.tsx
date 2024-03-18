import {Message} from "./styled";
import {Avatar, Column, Row, Typography} from "..";
import {Feedback as FeedbackModel} from "@/src/interfaces";

interface FeedbackProps {
  feedback: FeedbackModel;
}

export const Feedback: React.FC<FeedbackProps> = ({feedback}) => {
  const {user, feedback: message} = feedback;
  const {role, firstName, lastName, avatar} = user;
  return (
    <Row gap={15} alignItems="flex-start">
      <Column>
        <Avatar src={avatar} />
      </Column>
      <Column gap={10}>
        <Column>
          <Typography fontWeight="bold" fontSize={18}>
            {firstName} {lastName}
          </Typography>
          <Typography fontWeight="200">{role}</Typography>
        </Column>
        <Message>
          <Typography fontWeight={300}>{message}</Typography>
        </Message>
      </Column>
    </Row>
  );
};
