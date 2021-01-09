import firebase from 'firebase';
import 'firebase/storage'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   
var firebaseConfig = {
    apiKey: "AIzaSyDFv4wYuuV8S45KBIGcStIZ6jPi8_S3Oqk",
    authDomain: "imagegallery-c08d2.firebaseapp.com",
    databaseURL: "https://imagegallery-c08d2-default-rtdb.firebaseio.com",
    projectId: "imagegallery-c08d2",
    storageBucket: "imagegallery-c08d2.appspot.com",
    messagingSenderId: "694523134026",
    appId: "1:694523134026:web:2a32e5b33fa8e51fa5a6b3",
    measurementId: "G-FXRST94T3B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const storage=firebase.storage();

  export {
      storage,
      firebase
  }
    