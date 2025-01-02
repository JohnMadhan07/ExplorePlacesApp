import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import PlaceCard from "../../shared/components/UIElements/PlaceCard";
import ModalUnstyled from "../../shared/components/UIElements/Modal";

const PlaceItem = (props) => {
  const [openParent, setopenParent] = useState(false);
  const parentopenHandler = () => setopenParent(true);
  const panrentcloseHandler = () => setopenParent(false);
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
        <button onClick={parentopenHandler}> View on Map</button>
        <ModalUnstyled
          open={openParent}
          onClose={panrentcloseHandler}
          title="Location Details"
        >
          {" "}
          <Typography variant="body2">
            This is a placeholder for map or additional details.
          </Typography>
        </ModalUnstyled>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Box>
    </PlaceCard>
  );
};

export default PlaceItem;
