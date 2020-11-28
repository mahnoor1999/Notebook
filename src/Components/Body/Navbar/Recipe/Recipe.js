import React from "react";
import { useEffect, useState } from "react";
import firebase from "../../../../firebase";

const Recipe = () => {
  const [recipeList, setrecipeList] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("recipe")
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          recipeList.push(snap.val());
        });
      });
  }, []);

  let recipeListing = recipeList.map((data) => {
    return (
      <div className="fetch-content">
        <h1>{data.heading}</h1>
        <p>{data.content}</p>
      </div>
    );
  });

  return <>{recipeListing}</>;
};
export default Recipe;
