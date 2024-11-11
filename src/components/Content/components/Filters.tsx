import React from "react";
import { Box, Button } from "@mui/material";
import { TFilters } from "./types";
import { STUDENT_PARAMETER, STAFF_PARARAMETER } from "../contants/parameters";

export const Filters = ({ parameters, setParameters }: TFilters) => {
  const isActive = (filter: string) => parameters.includes(filter);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        gap: 3,
      }}
    >
      <Button
        variant="contained"
        size="large"
        color={isActive(STUDENT_PARAMETER) ? "primary" : "inherit"}
        onClick={() => setParameters(STUDENT_PARAMETER)}
        sx={{
          width: 250,
          "&:active": {
            boxShadow: "none",
            backgroundColor: "#0062cc",
            borderColor: "#005cbf",
          },
        }}
      >
        Estudiantes
      </Button>
      <Button
        variant="contained"
        size="large"
        color={isActive(STAFF_PARARAMETER) ? "primary" : "inherit"}
        onClick={() => setParameters(STAFF_PARARAMETER)}
        sx={{
          width: 250,
        }}
      >
        Staff
      </Button>
    </Box>
  );
};
