import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "../../shared/components/UIElements/Card";

const UsersItem = (props) => {
  return (
    <Card to={`/${props.id}/places`}>
      <img
        src={props.image}
        alt={props.name}
        style={{
          marginTop:"15px",
          width: "70px",
          height: "70px",
          borderRadius: "50%", // Circular image
          marginBottom: "16px",
          objectFit: "cover", 
        }}
      />
      <Box
      sx={{display:"flex",
        flexDirection:"column"
      }}>
      <Typography variant="h6" color="Black">
        {props.name}
      </Typography>
      <Typography variant="body2" color="Black">
        {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
      </Typography>
      </Box>
    </Card>
  );
};

export default UsersItem;
