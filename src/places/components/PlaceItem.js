import { Typography } from "@mui/material";
import React from "react";

const PlaceItem = (props) => {
  return (
    <>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "200px", height: "200px" }}
      ></img>
      <Typography variant="body1">{props.name}</Typography>
      <Typography variant="body2">{props.description}</Typography>
      </>
  );
};

export default PlaceItem;
