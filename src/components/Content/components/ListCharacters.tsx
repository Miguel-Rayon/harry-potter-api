import React, { useEffect, useState } from "react";
import { Grid2 as Grid } from "@mui/material";
import { TListCharacter } from "./types";
import { CardCharacter } from "./CardCharacter";
import { ICharacter } from "@/interfaces";
import { getCharacters } from "../utils/getCharacters";

export const ListCharacters = ({ characters, parameters }: TListCharacter) => {
  const [arrayCharacters, setArrayCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (parameters !== "") {
        const response = await getCharacters(parameters);
        setArrayCharacters(response as unknown as ICharacter[]);
      }
    };

    fetchData();
  }, [parameters]);

  useEffect(() => {
    if (characters && characters.length > 0) setArrayCharacters(characters);
  }, [characters]);

  return (
    <Grid
      container
      spacing={1}
      rowSpacing={1}
      sx={{ justifyContent: "space-around" }}
    >
      {arrayCharacters &&
        arrayCharacters.length > 0 &&
        arrayCharacters.map((character, index) => (
          <Grid size={6} key={index}>
            <CardCharacter character={character} />
          </Grid>
        ))}
    </Grid>
  );
};
