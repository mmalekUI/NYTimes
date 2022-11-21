import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../features/SearchBar/SearchBar";
import { GetServerSidePropsContext } from "next";
import ReviewCard from "../features/ReviewCard/ReviewCard";
import { APIResult, Result } from "../types/types";

type Props = {
  results: Array<Result>;
  q: any;
};

export const HomeView = (props: Props) => {
  return (
    <Box>
      <Container>
        <SearchBar />
      </Container>
      <SimpleGrid columns={[1, null, 2]}>
        {props.results?.map((result) => (
          <ReviewCard result={result} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export async function getHomeViewServerSideProps(
  ctx: GetServerSidePropsContext
) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${ctx.query.query}&api-key=${process.env.API_KEY}`
  );
  const reviews: APIResult = await res.json();
  // Pass data to the page via props
  return { props: { results: reviews.results } };
}
