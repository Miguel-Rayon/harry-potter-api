import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { CREATED_BY } from "../../contants/footer";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "dark.dark",
        py: { xs: 3, sm: 1.5 },
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack direction={"row"} spacing={1}>
        <Typography variant="body1">{CREATED_BY}</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
