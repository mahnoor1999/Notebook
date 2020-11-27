import React from "react";
import { useEffect, useState } from "react";
import firebase from "../../../../firebase";

const HealthCare = () => {
  const [healthList, sethealthList] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("health")
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          healthList.push(snap.val());
        });
      });
  }, []);
  let healthListing = healthList.map((data) => {
    console.log(data);
    return (
      <>
        <h1>{data.heading}</h1>
        <p>{data.content}</p>
      </>
    );
  });

  return <>{healthListing}</>;
};
export default HealthCare;
