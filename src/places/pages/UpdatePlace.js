import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import needleImage from "../../needle.jpg";
import howthImage from "../../howth.jpg";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/FormElements/validators";
import PlaceCard from "../../shared/components/UIElements/PlaceCard";
import { useForm } from "../../shared/components/hooks/Form-hook";

const dummy_places = [
  {
    id: "p1",
    name: "Dublin Needle",
    description: "A tall structure made of steel in the city center",
    image: needleImage,
    creator: "u1",
  },
  {
    id: "p2",
    name: "Howth CLiff",
    description: "A cliff near the East Ireland",
    image: howthImage,
    creator: "u2",
  },
  {
    id: "p2",
    name: "Howth CLiff",
    description: "A cliff near the East Ireland",
    image: howthImage,
    creator: "u2",
  },
];
const UpdatePlace = () => {
  const [isLoading,setisLoading]=useState(true)
  const placeId = useParams().placeId;
   const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = dummy_places.find((p) => p.id === placeId);

  useEffect(() => {
    if(identifiedPlace){
      setFormData(
        {
          title: {
            value: identifiedPlace.name,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    
    setisLoading(false)
  }, [setFormData, identifiedPlace]);
  if (!identifiedPlace) {
    return <div>No places Found</div>;
  }
  const submitformHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <PlaceCard>
      <form onSubmit={submitformHandler}>
        <Input
          id="title"    
          label="Title"
          element="input"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValidity={formState.inputs.title.isValid}
        ></Input>
        <Input
          id="description"
          label="Description"
          element="textarea"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValidity={formState.inputs.description.isValid}
        ></Input>
        <button type="submit" disabled={!formState.isValid}>
          EDIT PLACE
        </button>
      </form>
    </PlaceCard>
  );
};
export default UpdatePlace;
