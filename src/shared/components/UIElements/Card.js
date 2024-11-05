import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Card = ({ children }) => {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center", // Centers the card horizontally
        minHeight: "100vh", // Optional: makes the card center vertically within the viewport
      }}
    >
      <Box
        sx={{
          width: "320px",
          height: "80px",
          display: "flex",
          flexDirection: "row", // Horizontal layout
          alignItems: "center",
          gap: 3,
          mt: 2,
          padding: 2,
          borderRadius: 3,
          boxShadow: 3, 
          backgroundColor: "white",
          textDecoration: "none",
          color: "black",
          "&:hover": {
            boxShadow: 6,
            color: "primary",
          },
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default Card;
