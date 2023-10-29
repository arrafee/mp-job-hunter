import { useEffect } from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import LatestJobs from "./LatestJobs";
import axios from "axios";

const LandingPage = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/jobs")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <Hero />
      <Categories />
      <LatestJobs />
    </>
  );
};

export default LandingPage;
