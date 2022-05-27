import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import ShowsCardWrapper from "../components/ShowsCardWrapper";
import { Container } from "@mui/material";
import ReviewCardWrapper from "../components/ReviewCardWrapper";

const Home = () => {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Container maxWidth={"lg"}>
          <Heading title={"Upcoming Shows"}/>
          <ShowsCardWrapper />
        </Container>
      </section>
      <section style={{marginBottom:"8rem"}}>
        <Container maxWidth={"lg"}>
          <Heading title={"Reviews"} />
          <ReviewCardWrapper />
        </Container>
      </section>
    </>
  );
};

export default Home;
