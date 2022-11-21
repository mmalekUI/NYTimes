import {
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import { Result } from "../../types/types";

type Props = {
  result: Result;
};

const ReviewCard = (props: Props) => {
  // console.log(props.result);
  return (
    <Card maxW="l" m={10}>
      <CardHeader>
        <Heading size="md">{props.result.display_title}</Heading>
      </CardHeader>
      <CardBody>
        <Image
          src={props.result.multimedia?.src}
          fallbackSrc={"https://via.placeholder.com/440x300"}
          alt={props.result.multimedia?.type}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Text>{props.result.summary_short}</Text>
          <Text color="blue.600" fontSize="2xl">
            MPAA rating: {props.result.mpaa_rating}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
