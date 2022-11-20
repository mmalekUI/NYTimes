import { Card, CardBody, Stack, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Result } from "../../../views/HomeView";

type Props = {
  result: Result;
};

const ReviewCard = (props: Props) => {
  // console.log(props.result);
  return (
    <Card maxW="sm">
      <CardBody>
        <Heading size="md">{props.result.display_title}</Heading>
        <Image
          src={props.result.multimedia?.src}
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
