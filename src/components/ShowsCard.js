import { Typography } from "@mui/material";
import React from "react";
import benny from "../Assets/Images/Benny.png";
import ticket from '../Assets/Images/Ticket.svg'
const ShowsCard = () => {
  return (
    <>
      <div style={{width:"16.75rem", height:"24rem", borderRadius:"2rem"}}>
          
        <img src={benny} alt="" />
        <div style={{backgroundColor:"#111229",padding:"1rem"}}>
          <div>
            <span style={{display:'inline-block',fontWeight:"600", margin:"0.3rem 0 ", padding:"0.1rem 0.3rem",fontSize:"0.75rem", backgroundColor:"#E5C558" ,color:"#682F26", fontFamily:"Nunito, serif"}}>Folk</span>
            <Typography variant="h5" style={{margin:"0.5rem 0",color:"#fff",fontFamily: "Libre Baskerville, serif",}}>Benny Dayal</Typography>
          </div>
          <div>
              <p style={{fontFamily:"Nunito, serif", color:"#0259EB", fontWeight:"600"}}> More Info</p>
            <span>
              <img src={ticket} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsCard;
