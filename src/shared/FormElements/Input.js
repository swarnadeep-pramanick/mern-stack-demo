import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, actions) => {
  switch (actions.type) {
    case "CHANGE":
      return {
        ...state,
        value: actions.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, displatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const changeHandler = (event) => {
    displatch({ type: "CHANGE", val: event.target.value });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        value={inputState.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
      />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler}>
        {inputState.value}
      </textarea>
    );

  return (
    <div
      className={`form-control ${props.className} ${
        !inputState.isValid && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
