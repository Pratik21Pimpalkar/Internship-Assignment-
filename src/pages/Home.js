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
        <Navbar />
      <section className="Hero">
        <Hero />
      </section>
      <section>
        <Container maxWidth={"lg"}>
          <Heading title={"Upcoming Shows"} toggle={'yes'}/>
          <ShowsCardWrapper />
        </Container>
      </section>
      <section style={{marginBottom:"8rem"}} toggle={null}>
        <Container maxWidth={"lg"}>
          <Heading title={"Reviews"} />
          <ReviewCardWrapper />
        </Container>
      </section>
    </>
  );
};

export default Home;
