import { Grid } from "@mui/material";
import React from "react";
import ShowsCard from "./ShowsCard";
import UpcomingShowsData from "../Data/UpcomingShowData";
const ShowsCardWrapper = () => {
  return (
    <div>
      <Grid container justifyContent={"center"} alignItems={"center"} spacing={5}>
        {UpcomingShowsData.map((data, key) => {
          return (
            <Grid item md={3} sm={6}  key={key}>
              <ShowsCard data={data} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ShowsCardWrapper;
