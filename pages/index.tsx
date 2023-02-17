import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
      </main>
    </div>
  );
};

export default Home;
