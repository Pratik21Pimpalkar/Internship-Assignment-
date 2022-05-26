import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import ShowsCardWrapper from "../components/ShowsCardWrapper";
import { Container } from "@mui/material";
const Home = () => {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Container maxWidth={"lg"}>
          <Heading />
          <ShowsCardWrapper />
        </Container>
      </section>
    </>
  );
};

export default Home;
