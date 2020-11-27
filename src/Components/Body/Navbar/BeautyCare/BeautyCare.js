import React from 'react'
import { useEffect, useState } from "react";
import firebase from "../../../../firebase";
const BeautyCare  = () => {
    const [beautyList, setbeautyList] = useState([]);
    useEffect(() => {
      firebase
        .database()
        .ref("beauty")
        .on("value", (snapshot) => {
          snapshot.forEach((snap) => {
            beautyList.push(snap.val());
          });
        });
    }, []);
  
    let beautyListing = beautyList.map((data) => {
      console.log(data);
      return (
        <>
          <h1>{data.heading}</h1>
          <p>{data.content}</p>
        </>
      );
    });
  
    return <>{beautyListing}</>;
}
export default BeautyCare