import { Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddchartIcon from '@mui/icons-material/Addchart';
const RoundDiv = {
  borderRadius: "50%",
  position: "relative",
  width: "13rem",
  height: "13rem",
  backgroundColor: "transparent",
  border: "1px solid #ffffff99",
  transition: "all 0.5s ease"
 };
const RoundLabels = ({icon}) => {
  return <div className="roundLabels" style={RoundDiv}>
      {
          icon==="heart"? <FavoriteBorderIcon  style={{position:"absolute",fontSize:"1.7rem",fill:"#0259EB", top:"50%",left:"50%", color:"white",transform:"translate(-50%, -186%)"}}/>:<AddchartIcon  style={{position:"absolute",fontSize:"1.7rem", top:"50%",left:"50%", color:"#ffffff99",transform:"translate(-50%, -186%)"}}/>
      }
      {/* <FavoriteBorderIcon/> */}
      <Typography variant="subtitle1"  style={{position:"absolute",fontSize:"1.3rem", top:"50%",left:"50%", color:"white",transform:"translate(-50%, -50%)"}}>0</Typography>
      <Typography variant="body1" style={{position:"absolute", top:"50%",left:"50%", color:"#ffffff99",transform:"translate(-50%, 75%)"}}>Label</Typography>
  </div>;
};

export default RoundLabels;
