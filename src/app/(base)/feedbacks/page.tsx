import {Fragment} from "react";
import {Heart} from "react-feather";
import {Feedback, Row, Typography} from "@/src/components";
import {Feedback as FeedbackModel} from "@/src/interfaces";

const mock: FeedbackModel[] = [
  {
    user: {
      firstName: "Luis",
      lastName: "Sanchez",
      role: "Senior Backend Developer",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    feedback:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, itaque!",
  },
  {
    user: {
      firstName: "Pedro",
      lastName: "Martinez",
      role: "Senior DevOps",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quasi illo unde obcaecati magnam fugiat aspernatur nesciunt neque ratione cupiditate.",
  },
];

export default function Feedbacks() {
  return (
    <Fragment>
      <Row gap={10}>
        <Typography variant="title">Thank you all</Typography>
        <Heart color="red" fill="red" />
      </Row>
      {mock.map((feedback, key) => (
        <Feedback key={key} feedback={feedback} />
      ))}
    </Fragment>
  );
}
