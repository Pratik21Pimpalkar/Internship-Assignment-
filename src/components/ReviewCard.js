import { Typography } from "@mui/material";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const ReviewCard = ({ data }) => {
  return (
    <div
      style={{
        borderRadius: "1rem",
        background: "linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%)",
        position: "relative",
        width: "22.5rem",
        height: "15.5rem",
  marginBottom: "2rem",
marginLeft:"2rem"
      }}
    >
      <div
        style={{
          padding: "1.5rem",
          border: "2px solid #E5AF56",
          borderRadius: "1rem",
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          height: "100%",
          width: "100%",
          backgroundColor: "#0A0B1A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src={data.img} alt="userPhoto" />
          </div>
          <div style={{ padding: "1rem" }}>
            <Typography
              variant="h6"
              style={{
                color: "white",
                fontFamily: "Quattrocento,serif",
                fontSize: "1rem",
              }}
            >
              {data.name}
            </Typography>
            <Typography
              style={{
                color: "#E5C558",
                fontFamily: "Rubik, serif",
                display: "flex",
                alignItems: "center",
                textTransform:"uppercase",
                fontSize:"0.68rem"
              }}
              variant="body1"
            >
              <ReactCountryFlag
                countryCode={data.flag}
                svg
                style={{ width: "1.5rem", marginRight: "0.5rem" }}
              />
              {data.country}
            </Typography>
          </div>
        </div>
        <div>
          <Typography
            variant="body2"
            style={{
              color: "#ffffffa1",
              fontWeight: "400",
              fontFamily: "Nunito, serif",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
            donec in nisi vitae. Vestibulum pellentesque eget laoreet
            adipiscing.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
