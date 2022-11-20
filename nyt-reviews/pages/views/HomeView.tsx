import { Container } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../api/features/SearchBar/SearchBar";
import { GetServerSidePropsContext } from "next";
import ReviewCards from "../api/features/ReviewCard/ReviewCard";
import ReviewCard from "../api/features/ReviewCard/ReviewCard";

type Props = {
  results: Array<Result>;
};

export const HomeView = (props: Props) => {
  console.log(props.results);
  return (
    <Container>
      <div>Movie-reviews</div>
      <SearchBar />
      {props.results.map((result) => (
        <ReviewCard result={result} />
      ))}
    </Container>
  );
};

export async function getHomeViewServerSideProps(
  ctx: GetServerSidePropsContext
) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.nytimes.com/svc/movies/v2/reviews/search.json?${ctx.query}&api-key=${process.env.API_KEY}`
  );
  const reviews: APIResult = await res.json();
  // Pass data to the page via props
  return { props: { results: reviews.results } };
}
type APIResult = {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: null | Array<Result>;
};
export type Result = {
  display_title: string;
  mpaa_rating: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
  link: {
    type: string;
    url: string;
    suggested_link_text: string;
  };
  multimedia: {
    type: string;
    src: string;
    height: number;
    width: number;
  };
};
