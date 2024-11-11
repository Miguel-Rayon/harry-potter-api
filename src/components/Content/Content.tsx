import React from "react";
import { Grid2 as Grid } from "@mui/material";
import { ListCharacters } from "./components";
import { TContent } from "./types";

export const Content = ({ characters }: TContent) => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>header create</Grid>
      <Grid size={12}>
        <ListCharacters characters={characters} />
      </Grid>
      <Grid size={12}>footer create</Grid>
    </Grid>
  );
};
