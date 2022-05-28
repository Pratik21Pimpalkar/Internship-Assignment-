import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "swiper/css";
import LabelWrapper from "./LabelWrapper";

const overlay = {
  background:
    "linear-gradient(180deg, #050b1447 0%, #010d20b0 67.53%, #0A0B1A 85.33%)",
  width: "100%",
  height: "100%",
  pointerEvents: 'none',
  position: "absolute",
};
const heroTitle = {
  color: "#FFFFFF",
  fontFamily: "Libre Baskerville, serif",
  fontSize: "5rem",
  zIndex:2,
  marginTop: "12rem"
};
const heroSubtitle = {
  fontFamily: "Nunito,serif",
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: "400",
  opacity: "0.6",
  marginTop:"1.5rem"
};
const HeroWrapper={
  display:'flex',
  justifyContent: "flex-start",
}
const Hero = () => {
  return (
    <div style={HeroWrapper}>
     <div className="overlay" style={overlay}></div>
     <Container style={{display:'flex', flexDirection: 'column', position:'relative'}}>
       <Typography style={heroTitle}>Cari Cari</Typography>
       <Typography style={heroSubtitle}>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</Typography>
       <LabelWrapper/>
     </Container>
    </div>
  );
};

export default Hero;
