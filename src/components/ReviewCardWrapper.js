import { Grid } from "@mui/material";
import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewData from "../Data/ReviewData";

const ReviewCardWrapper = () => {
  
  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}spacing={5}>
     {   ReviewData.map((data,key)=>
        {
            return(
          <Grid item md={4} sm={6} key={key}>
            <ReviewCard data={data} />
          </Grid>)
        }
        )}
              
      </Grid>
    </>
  );
};

export default ReviewCardWrapper;
