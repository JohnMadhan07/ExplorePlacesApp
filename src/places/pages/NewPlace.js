import React from "react";
import PlaceCard from "../../shared/components/UIElements/PlaceCard";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/FormElements/validators";
import { useForm } from "../../shared/components/hooks/Form-hook";

const NewPlace = () => {
 const[formState, inputHandler]=useForm({
  title: {
    value: "",
    isValid: false,
  },
  description: {
    value: "",
    isValid: false,
  },
  address: {
    value: "",
    isValid: false,
  },
},
  false
)
const placeformsubmitHandler = (event)=>{
event.preventDefault();
console.log(formState)
}
  return (
    <PlaceCard>
      <form onSubmit={placeformsubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="description"
          rows={3}
          label="description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
        />
    <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
      <button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </button>
      </form>
    </PlaceCard>
  );
};
export default NewPlace;
