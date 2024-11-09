import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, List, ListItem } from "@mui/material";
import ThemeModeToggler from "@/components/ThemModeToggler";
import { Navigation } from "@/layouts/navigation";
import Link from "next/link";
import { PROJECT_NAME } from "@/layouts/Main/contants/topbar";

const Topbar = ({ onSidebarOpen }: { onSidebarOpen: () => void }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href={`/`}
        title={PROJECT_NAME}
        width={{ xs: 180, md: 280 }}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          sx={{ fontWeight: 400, fontSize: { xs: 19, md: 30 } }}
        >
          {PROJECT_NAME}
        </Typography>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        {Navigation &&
          Navigation.topbar &&
          Navigation.topbar.map((item) => (
            <List sx={{ p: 0, marginRight: 2 }} key={item.title}>
              <ListItem alignItems="flex-start" disableGutters disablePadding>
                <Link
                  href={item.href}
                  color="text.primary"
                  style={{
                    marginLeft: 8,
                    textDecoration: "none",
                    color: mode === "dark" ? "#fff" : "#000",
                    fontSize: 18,
                  }}
                >
                  {item.title}
                </Link>
              </ListItem>
            </List>
          ))}

        <ThemeModeToggler />
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
