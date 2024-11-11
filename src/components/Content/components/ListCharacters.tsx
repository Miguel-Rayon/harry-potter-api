import React from "react";
import { Grid2 as Grid } from "@mui/material";
import { TListCharacter } from "./types";
import { CardCharacter } from "./CardCharacter";

export const ListCharacters = ({ characters }: TListCharacter) => {
  return (
    <Grid
      container
      spacing={1}
      rowSpacing={1}
      sx={{ justifyContent: "space-around" }}
    >
      {characters &&
        characters.length > 0 &&
        characters.map((character, index) => (
          <Grid size={6} key={index}>
            <CardCharacter character={character} />
          </Grid>
        ))}
    </Grid>
  );
};
