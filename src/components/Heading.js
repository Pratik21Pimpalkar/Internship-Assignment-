import { Typography } from "@mui/material";
import React from "react";

const heading = {
  fontFamily: "Libre Baskerville, serif",
  marginTop: "8rem",
  color: "#fff",
  fontSize: "2rem",
};

const Heading = ({title}) => {
  return (
    <div style={{margin:"2.8rem 0"}} >
      <Typography variant="h4" style={heading}>
        {title}
      </Typography>
      <div
        style={{
          backgroundColor: "#0259EB",
          width: "3rem",
          height: "0.18rem",
          borderRadius: "1rem",
          marginTop: "0.5rem",
        }}
      />
    </div>
  );
};

export default Heading;
