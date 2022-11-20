import React from "react";
import { Result } from "../../../views/HomeView";

type Props = {
  result: Result;
};

const ReviewCard = (props: Props) => {
  console.log(props.result);
  return <div>ReviewCard</div>;
};

export default ReviewCard;
