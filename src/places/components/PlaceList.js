import React from "react";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = (props) => {
  console.log(props.items)
  if (props.items.length === 0) {
    return (
      <Card>
        <h2>No Users found</h2>
      </Card>
    );
  }
  return (
    <>
      {props.items.map((place) => (
        <PlaceItem
          id={place.id}
          key={place.id}
          name={place.name}
          image={place.image}
          description={place.description}
          //   coordinates={place.coordinates}
             creatorId={place.creator}
        ></PlaceItem>
      ))}
    </>
  );
};

export default PlaceList;
