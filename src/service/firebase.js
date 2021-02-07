import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB5S3vUzfmtxmPb9M2z6G_jCIoqL6nz6EY",
    authDomain: "pokemon-game-e2e13.firebaseapp.com",
    databaseURL: "https://pokemon-game-e2e13-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-e2e13",
    storageBucket: "pokemon-game-e2e13.appspot.com",
    messagingSenderId: "317467854916",
    appId: "1:317467854916:web:e6d50fabc2778c450d9411"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export const fire = firebase;
  export const database = firebase.database();

  export default database;