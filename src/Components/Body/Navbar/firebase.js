import React from 'react';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCFlwaYmWFlv_wklk_jjr-x1F-HVj8hqZY",
    authDomain: "notebook-4430d.firebaseapp.com",
    databaseURL: "https://notebook-4430d.firebaseio.com",
    projectId: "notebook-4430d",
    storageBucket: "notebook-4430d.appspot.com",
    messagingSenderId: "1001065601780",
    appId: "1:1001065601780:web:74270051a82da432779ca1",
    measurementId: "G-E6VE3VDFEZ"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export default firebase;    