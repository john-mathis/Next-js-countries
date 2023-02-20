"use client";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import StateContext from "./Context/StateContext";

type CardProps = {
  name: string;
  population: number;
  reigon: string;
  flag: string;
  capital: string;
}[];

export default function Cards() {
  const [cardDetails, setCardDetails] = useState<any[]>([]);
  async function getCardData() {
    const response = await fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .catch((err) => new Error(err));
    return response;
  }

  async function CardData() {
    const data = await getCardData();
    setCardDetails(data);
    console.log(data);
  }

  useEffect(() => {
    CardData();
  }, []);

  const displayCardData = cardDetails.map((details) => {
    return (
      <>
        <div
          onClick={() => {
            console.log(details.name.common);
          }}
          className="h-80 w-64 my-4 bg-white dark:bg-darkgrey relative rounded cursor-pointer	"
        >
          <div>
            <img
              className="h-40 min-w-full rounded-t-md	"
              src={details.flags.png}
              alt="country flag"
            />
          </div>
          <div className="h-40 p-4 text-black dark:text-white flex flex-col justify-center">
            <h2 className="font-bold text-lg mb-2">{details.name.common}</h2>
            <p>Population: {details.population.toLocaleString()}</p>
            <p>Reigon: {details.region}</p>
            <p>Capital: {details.capital}</p>
          </div>
        </div>
      </>
    );
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-screen-2xl m-auto">
      {displayCardData}
    </section>
  );
}
