import React from "react";

import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

const MainNavigation = () => {
  const theme = useTheme();
  const isLargescreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [isdrawerOpen, setisdrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setisdrawerOpen(open);
  };
  return (
    <Box sx={{ flexgrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Explore
          </Typography>
          {isLargescreen ? (
            <NavLinks />
          ) : (
             <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Drawer
              anchor="left" 
              open={isdrawerOpen}
              onClose={toggleDrawer(false)} 
            >
              <NavLinks></NavLinks>
            </Drawer>
          </IconButton>
            
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MainNavigation;
