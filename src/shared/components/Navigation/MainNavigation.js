import React from "react";

import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <Box sx={{ flexgrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Explore
          </Typography>   
          <NavLinks></NavLinks>     
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MainNavigation;
