import React from "react";
import Input from "../../shared/components/FormElements/Input";
import PlaceCard from "../../shared/components/UIElements/PlaceCard";
import { useForm } from "../../shared/components/hooks/Form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from "../../shared/components/FormElements/validators";

const Authenticate = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const formSubmitHandler = (e) => e.preventDefault();
  return (
    <PlaceCard>
      <form onSubmit={formSubmitHandler}>
        <Input
          id="email"
          element="input"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          label="Email"
        ></Input>
        <Input
          id="password"
          element="input"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          label="password"
        ></Input>
        <button type="submit" disabled={!formState.isValid}>
        Sign In
      </button>
      </form>
    </PlaceCard>
  );
};
export default Authenticate;
