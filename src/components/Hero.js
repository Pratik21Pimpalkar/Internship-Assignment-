import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import heroImg from "../Assets/Images/Hero.png";
import RoundLabels from "./RoundLabels";
const overlay = {
  background:
    "linear-gradient(180deg, #050b1447 0%, #010d20b0 67.53%, #0A0B1A 85.33%)",
  width: "100%",
  height: "100%",
  position: "absolute",
};
const heroTitle = {
  color: "#FFFFFF",
  fontFamily: "Libre Baskerville, serif",
  fontSize: "5rem",
};
const heroSubtitle = {
  fontFamily: "Nunito,serif",
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: "400",
  opacity: "0.6",
};
const Hero = () => {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <div style={overlay}></div>
      <img
        src={heroImg}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        alt=""
      />
      <Container maxWidth={"lg"}>
        <Grid
          container
          direction={"column"}
          style={{ position: "relative", bottom: "32rem" }}
        >
          <Grid item md={5}>
            <Typography variant="h3" style={heroTitle}>
              Cari Cari
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="subtitle" style={heroSubtitle}>
              Live from their sofa to yours. Get closer to your favorite <br />
              artists, and never miss out.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ position: "relative", bottom: "22.5rem" }} spacing={5} justifyContent={"center"}>
          <Grid item md={3}>
            <RoundLabels  icon={"heart"} />
          </Grid>
          <Grid item md={3}>
            <RoundLabels icon={"chart"} />
          </Grid>
          <Grid item md={3}>
            <RoundLabels icon={"chart"} />
          </Grid>
          <Grid item md={3}>
            <RoundLabels  icon={"chart"}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
