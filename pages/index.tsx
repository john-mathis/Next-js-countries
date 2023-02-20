import type { NextPage } from "next";
import Head from "next/head";
import Cards from "../Components/Cards";
import Header from "../Components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Country API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Cards />
      </main>
    </div>
  );
};

export default Home;
