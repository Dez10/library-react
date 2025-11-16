import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Features";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

const Home = ({ books }) => {
  console.log("Home component - books received:", books);
  console.log("Home component - books length:", books?.length);
  return (
    <>
      <Landing />
      <Highlights />
      <Features books={books} />
      <Discounted books={books} />
      <Explore />
    </>
  );
};

export default Home;
