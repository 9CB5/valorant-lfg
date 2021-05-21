import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAw9Rxo5W5QtUapC4N1_pR6VzlnMTPLTLk",
    authDomain: "react-lfg-tool.firebaseapp.com",
    databaseURL: "https://react-lfg-tool.firebaseio.com",
    projectId: "react-lfg-tool",
    storageBucket: "react-lfg-tool.appspot.com",
    messagingSenderId: "111434624397",
    appId: "1:111434624397:web:ee5146055aa5b61158e1c4",
    measurementId: "G-MPDGL4SMHS"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;