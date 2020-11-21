import React, { useState } from "react";
import RadioBtn from "./RadioButton/RadioButton";
import InputValue from "./InputValue/InputValue";
import InputData from "./InputData/InputData";

const AddBtn = ({ setInputHead,setInputContent}) => {
  return (
    <div>
      <RadioBtn />
      <br></br>
      <InputValue setInputHead={setInputHead} />
      <InputData setInputContent={setInputContent}/>
      <button>Add</button>
    </div>
  );
};
export default AddBtn;
