import { Box, Container } from "@mui/material";
import React from "react";

const PlaceCard = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#a8a8a8",
        minHeight: "100vh",
        margin:0,
        padding:0
      }}
      maxWidth={false}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "450px",
          paddingLeft: 15,
          paddingRight:15,
          borderRadius: 3,
          paddingBottom:"20px",
          boxShadow: 3,
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
          marginTop:"15px"
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
export default PlaceCard;
