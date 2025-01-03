import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import PlaceCard from "../../shared/components/UIElements/PlaceCard";
import ModalUnstyled from "../../shared/components/UIElements/Modal";

const PlaceItem = (props) => {
  const [openMap, setopenMap] = useState(false);
  const [openParent, setopenParent] = useState(false);

  const showMapHandler = () => setopenMap(true);
  const closeMapHandler = () => setopenMap(false);
  const openParentHandler = () => setopenParent(true);
  const closeParentHandler = () => setopenParent(false);

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
        <button onClick={showMapHandler}> View on Map</button>
        <ModalUnstyled
          open={openMap}
          onClose={closeMapHandler}
          title="Location Details"
        >
          {" "}
          <Typography variant="body2">
            This is a placeholder for map or additional details.
          </Typography>
        </ModalUnstyled>
        <Button>Edit</Button>
        <Button onClick={openParentHandler}>Delete</Button>
        <ModalUnstyled open={openParent} onClose={closeParentHandler}>
          <Typography variant="body3">Delete Confirm?</Typography>        
         <Button>Yes</Button>
         <Button onClick={closeParentHandler}>No</Button>
        </ModalUnstyled>
      </Box>
    </PlaceCard>
  );
};

export default PlaceItem;
