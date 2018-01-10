// Initialize Firebase
var config = {
  apiKey: "AIzaSyCCSMK4iZwoI3I8MTzgrEqb0lYkQdJPgcQ",
  authDomain: "speak-up-36fa7.firebaseapp.com",
  databaseURL: "https://speak-up-36fa7.firebaseio.com",
  projectId: "speak-up-36fa7",
  storageBucket: "",
  messagingSenderId: "221552941734"
};
firebase.initializeApp(config);
// Creando instancia del objeto del proveedor de Google
var provider = new firebase.auth.GoogleAuthProvider();