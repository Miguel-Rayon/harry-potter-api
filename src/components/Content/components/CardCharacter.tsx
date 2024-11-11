import React from "react";
import {
  Card,
  Grid2 as Grid,
  IconButton,
  Avatar,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { TCardCharacter } from "./types";
import { IconHeart } from "@tabler/icons-react";
import { HOUSES_COLORS } from "../contants/houseColor";

export const CardCharacter = ({ character }: TCardCharacter) => {
  return (
    <Card>
      <Grid container style={{ alignContent: "center" }}>
        <Grid
          size={{ xs: 12, md: 4 }}
          style={{
            background: HOUSES_COLORS[character.house],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={character.image}
            alt={character.name}
            sx={{ width: 130, height: 130 }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          style={{
            padding: 4,
            backgroundColor: character.alive ? "inherit" : "rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
          }}
        >
          <Box
            sx={{
              width: "100%",
              marginBottom: 3,
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              {character.alive ? "Vivo" : "Muerto"}{" "}
              {character.hogwartsStudent
                ? " / Estudiante"
                : character.hogwartsStaff
                ? " / Staff"
                : ""}
            </Typography>
            <IconButton>
              <IconHeart />
            </IconButton>
          </Box>
          <Stack spacing={2} direction={"column"}>
            <Typography>Cumpleaños: {character.dateOfBirth}</Typography>
            <Typography>Género: {character.gender}</Typography>
            <Typography>Color de ojos: {character.eyeColour}</Typography>
            <Typography>Color de cabello: {character.hairColour}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
