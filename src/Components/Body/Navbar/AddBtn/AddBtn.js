import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import RadioBtn from "./RadioButton/RadioButton";
import InputValue from "./InputValue/InputValue";
import InputData from "./InputData/InputData";
import firebase from "../../../../firebase";
import "./AddBtn.css";
const AddBtn = ({
  setInputHead,
  setInputContent,
  inputHead,
  inputContent,
  radioValue,
  updateRadioValue,
}) => {
  // select the reference category for
  // Recipes beauty and health according add the content in respective node
  let category;
  if (radioValue === "recipe") {
    category = "recipe";
  } else if (radioValue === "health") {
    category = "health";
  } else {
    category = "beauty";
  }
  // onSubmit function for storing the haeding and content in firebase database
  // storing in firebase
  function addInFirebase(e) {
    e.preventDefault();
    if (inputHead === "" || inputContent === "" || radioValue === "") {
      alert("please fill all the field");
      return false;
    } else {
      const Entry = firebase.database().ref(category);
      const addData = {
        heading: inputHead,
        content: inputContent,
      };
      Entry.push(addData);
      return true;
    }
  }
  // add button return the form
  return (
    <form onSubmit={addInFirebase}>
      <RadioBtn radioValue={radioValue} updateRadioValue={updateRadioValue} />
      <InputValue setInputHead={setInputHead} inputHead={inputHead} />
      <InputData
        setInputContent={setInputContent}
        inputContent={inputContent}
      />
      <button type="submit" value="submit">
        Share
      </button>
    </form>
  );
};
export default withRouter(AddBtn);
