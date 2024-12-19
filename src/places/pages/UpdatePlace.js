import React from "react";
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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
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
  const identifiedPlace = dummy_places.find((p) => p.id === placeId);
  const [formState, inputHandler] = useForm(
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
  if (!identifiedPlace) {
    return <div>No places Found</div>;
  }
  const submitformHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
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
