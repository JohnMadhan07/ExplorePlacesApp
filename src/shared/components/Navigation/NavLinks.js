import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/Auth-context";

const NavLinks = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    marginLeft: "1rem",
  };
  const auth = useContext(AuthContext);
  return (
    <>
      <NavLink to="/" exact style={linkStyle}>
        <Button color="inherit">Home</Button>
      </NavLink>
      {auth.isLoggedIn && (
        <NavLink to="u1/places/" style={linkStyle}>
          <Button color="inherit">My Places</Button>
        </NavLink>
      )}
      {auth.isLoggedIn && (
        <NavLink to="/places/new" style={linkStyle}>
          <Button color="inherit">Add Place</Button>
        </NavLink>
      )}
      {!auth.isLoggedIn && (
        <NavLink to="/auth" style={linkStyle}>
          <Button color="inherit">Authenticate</Button>
        </NavLink>
      )}
    </>
  );
};
export default NavLinks;
