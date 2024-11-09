import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { BoxProps } from "@mui/system";

interface TContainer extends Omit<BoxProps, "children"> {
  children: React.JSX.Element;
}

const Container = ({ children, ...props }: TContainer) => (
  <Box
    maxWidth={{ sm: 720, md: 1400 }}
    width={1}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 4 }}
    {...props}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
