import React, { useReducer, useEffect } from "react";

import { validate } from "./validators";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
        isTouched: true,
      };
    default:
      return state;
  }
};
const Input = (props) => {
  const [inputstate, dispatch] = useReducer(reducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });
  const conditionalStyles = {
    backgroundColor:
      !inputstate.isTouched || inputstate.isValid ? "white" : "#ffc7cb",
    border:
      !inputstate.isTouched || inputstate.isValid
        ? "1px solid #4a4949"
        : "1px solid #a90006",
    borderRadius: "2px",
  };
  const { id, onInput } = props;
  const { value, isValid } = inputstate;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };
 
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        onChange={changeHandler}
        value={inputstate.value}
        style={conditionalStyles}
      ></input>
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputstate.value}
      ></textarea>
    );

  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        justifyContent: "start",
        width: "100%",
      }}
    >
      {props.label}
      {element}
    </label>
  );
};

export default Input;
