import { Typography } from "@mui/material";
import React from "react";

const heading = {
  fontFamily: "Libre Baskerville, serif",
  marginTop:  "8rem",
  color:"#fff",
  fontSize: "2rem"
};

const Heading = () => {
  return (
    
      <Typography variant="h4" style={ heading }   >
        Upcoming Shows
      </Typography>
  );
};

export default Heading;
