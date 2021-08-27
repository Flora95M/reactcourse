import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJW_Hc9hR9q6wy2Qe522UQV-B2zUsrXgY",
  authDomain: "react-course-routes.firebaseapp.com",
  databaseURL: "https://react-course-routes-default-rtdb.firebaseio.com",
  projectId: "react-course-routes",
  storageBucket: "react-course-routes.appspot.com",
  messagingSenderId: "427042103337",
  appId: "1:427042103337:web:39ee551bae0633a24f3c38"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()

export default firebase;

