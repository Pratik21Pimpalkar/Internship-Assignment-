import { Grid } from "@mui/material";
import React from "react";
import ShowsCard from "./ShowsCard";

const ShowsCardWrapper = () => {
  return (
    <div>
      <Grid container justifyContent={'center'} spacing={5}>
        <Grid item md={3}>
          <ShowsCard />
        </Grid>
        <Grid item md={3}>
          <ShowsCard />
        </Grid>
        <Grid item md={3}>
          <ShowsCard />
        </Grid>
        <Grid item md={3}>
          <ShowsCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowsCardWrapper;
