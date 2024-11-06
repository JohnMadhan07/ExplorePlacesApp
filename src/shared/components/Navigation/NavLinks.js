import React from "react";

import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const NavLinks = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    marginLeft: "1rem",
  };
  return (
    <>
      <NavLink to="/" exact style={linkStyle}>
        <Button color="inherit">Home</Button>
      </NavLink>
      <NavLink to="/places/u1" style={linkStyle}>
        <Button color="inherit">My Places</Button>
      </NavLink>
      <NavLink to="/places/new" style={linkStyle}>
        <Button color="inherit">Add Place</Button>
      </NavLink>
      <NavLink to="/auth" style={linkStyle}>
        <Button color="inherit">Authenticate</Button>
      </NavLink>
    </>
  );
};
export default NavLinks;
