import { GetServerSideProps, GetServerSidePropsContext } from "next";
import styles from "../styles/Home.module.css";
import { getHomeViewServerSideProps, HomeView } from "./views/HomeView";

export default HomeView;

export const getServerSideProps = getHomeViewServerSideProps;
