import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBQ7dEe7agdnjGpRWc2o-kFM6E_WmSnFxs",
    authDomain: "notebook-4a46f.firebaseapp.com",
    databaseURL: "https://notebook-4a46f.firebaseio.com",
    projectId: "notebook-4a46f",
    storageBucket: "notebook-4a46f.appspot.com",
    messagingSenderId: "704415044762",
    appId: "1:704415044762:web:d46a95a0a8df027cf37b23"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;