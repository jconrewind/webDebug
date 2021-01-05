import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";

import SimplyLiveLogo from "../../assets/simplylive-blk.png";

function Header() {
  return (
    <AppBar position="relative" style={{ backgroundColor: "rgb(171, 25, 31)" }}>
      <Toolbar>
        <img alt="logo" src={SimplyLiveLogo} style={{ width: "200px" }} />
        <Typography variant="h4">
          <Box fontWeight="fontWeightLight" ml={2}>
            Web Debug
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
