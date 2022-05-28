import { Button, Typography } from "@mui/material";
import React from "react";

const heading = {
  fontFamily: "Libre Baskerville, serif",
  marginTop: "8rem",
  color: "#fff",
  fontSize: "2rem",
  flex:"1"
};

const Heading = ({title,toggle}) => {
  return (
    <div style={{margin:"2.8rem 0"}} >
      <div style={{display:"flex"}}>
      <Typography variant="h4" style={heading}>
        {title}
      </Typography>
      {toggle  &&
      <Button style={{marginTop:'8rem', color:"#E5C558", textTransform:"capitalize", fontFamily:"Nunito, serif", fontWeight:'600'}}> View All</Button>}</div>
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
