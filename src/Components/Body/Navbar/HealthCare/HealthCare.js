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
      <div className="fetch-content">
        <h1>{data.heading}</h1>
        <p>{data.content}</p>
      </div>
    );
  });

  return <>{healthListing}</>;
};
export default HealthCare;
