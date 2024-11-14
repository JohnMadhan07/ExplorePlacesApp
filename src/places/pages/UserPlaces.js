import React from "react";
import PlaceList from "../components/PlaceList";
import needleImage from "../../needle.jpg";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const UserPlaces = () => {
  
  const dummy_places = [
    {
      id: "p1",
      name: "Dublin Needle",
      description: "A tall structure made of steel in the city center",
      image: needleImage,
      creator:"u1",
    },
    {
      id: "p2",
      name: "Dublin Needle",
      description: "A tall structure made of steel in the city center",
      image: needleImage,
      creator:"u2",
    },
  ];
  const userid= useParams().userid
  const loaded_places=dummy_places.filter((place)=>(place.creator===userid))
  console.log(loaded_places)
  return <PlaceList items={loaded_places}></PlaceList>;
};

export default UserPlaces;
