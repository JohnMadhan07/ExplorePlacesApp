import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PlaceCard from "../../shared/components/UIElements/PlaceCard";
import BaseModal from "../../shared/components/UIElements/Modal";

const PlaceItem = (props) => {
  return (
    <PlaceCard>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "400px", height: "300px" }}
      ></img>
      <Typography variant="body1">{props.name}</Typography>
      <Typography variant="body2">{props.description}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <BaseModal></BaseModal>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Box>
    </PlaceCard>
  );
};

export default PlaceItem;
