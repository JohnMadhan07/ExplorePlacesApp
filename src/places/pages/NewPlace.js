import React from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/FormElements/validators";
const NewPlace = () => {
  return (
    <form>
      <Input element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} />
    </form>
  );
};
export default NewPlace;
