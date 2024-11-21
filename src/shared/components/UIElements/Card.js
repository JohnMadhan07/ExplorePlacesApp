import React from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Card = ({ children, to }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {to ? (
        <Link to={to} style={{ textDecoration: "none" }}>
          <Box sx={cardStyle}>{children}</Box>
        </Link>
      ) : (
        <Box sx={cardStyle}>{children}</Box>
      )}
    </Container>
  );
};

const cardStyle = {
  width: "320px",
  height: "80px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 3,
  mt: 2,
  padding: 2,
  borderRadius: 3,
  boxShadow: 3,
  backgroundColor: "white",
  color: "black",
  textDecoration: "none",
  "&:hover": {
    boxShadow: 6,
    color: "primary",
  },
};

export default Card;
