import React, { useState,useContext } from "react";
import Input from "../../shared/components/FormElements/Input";
import PlaceCard from "../../shared/components/UIElements/PlaceCard";
import { useForm } from "../../shared/components/hooks/Form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/FormElements/validators";
import { AuthContext } from "../../shared/components/context/Auth-context";
const Authenticate = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setisLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
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
  const formSubmitHandler = (e) => {e.preventDefault();
  auth.login()}
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setisLoginMode((prevMode) => !prevMode);
  };
  return (
    <PlaceCard>
      {!isLoginMode && (
        <Input
          element="input"
          id="name"
          onInput={inputHandler}
          label="Your Name"
          validators={[VALIDATOR_REQUIRE()]}
        ></Input>
      )}
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
          {isLoginMode ? "LOGIN" : "SIGNUP" }
        </button>
      </form>
      <button onClick={switchModeHandler}>
        Switch to {isLoginMode ? "SIGNUP"  : "LOGIN"}
      </button>
    </PlaceCard>
  );
};
export default Authenticate;
