import React, { useState } from "react";

const RadioBtn = ({updateRadioValue}) => {
  return (
    <div onChange={(e) => updateRadioValue(e.target.value)} className="radio-div">
      <input type="radio" id="recipe" name="categories" value="recipe" />
      <label htmlFor="recipe" className="radio-label">Recipe</label>
      <input type="radio" id="health" name="categories" value="health" />
      <label htmlFor="health" className="radio-label">Health </label>
      <input type="radio" id="beauty" name="categories" value="beauty" />
      <label htmlFor="beauty" className="radio-label">Beauty </label>
    </div>
  );
};
export default RadioBtn;
