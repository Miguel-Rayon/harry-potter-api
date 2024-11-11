import React from "react";
import { Grid2 as Grid } from "@mui/material";
import { ListCharacters, Filters } from "./components";
import { TContent } from "./types";

export const ContentCharacters = ({
  characters,
  parameters,
  setParameters,
}: TContent) => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Filters parameters={parameters} setParameters={setParameters} />
      </Grid>
      <Grid size={12}>
        <ListCharacters characters={characters} parameters={parameters} />
      </Grid>
      <Grid size={12}>footer create</Grid>
    </Grid>
  );
};
