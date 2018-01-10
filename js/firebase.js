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

// Data
var data = {
  'ingles': [
    {
      'name': 'Juan',
      'gender': 'masculino',
      'email': 'jmendoza@gmail.com',
      'birthday': '03/10/1996',
      'country': 'USA',
      'lengnativo': 'Inglés',
      'lenglearn': ['Español'],
      'aboutme': 'Student',
      'like': ['music', 'technology']
    }
  ],
  'frances': [
    {
      'name': 'Eve',
      'gender': 'femenino',
      'email': 'evebouch@gmail.com',
      'birthday': '05/10/1996',
      'country': 'Francia',
      'lengnativo': 'Francés',
      'lenglearn': ['Español'],
      'aboutme': 'Musician',
      'like': ['music', 'technology']
    }
  ],
  'italiano': [
    {
      'name': 'Astrid',
      'gender': 'femenino',
      'email': 'astridmangi@gmail.com',
      'birthday': '19/03/1996',
      'country': 'Italia',
      'lengnativo': 'Italiano',
      'lenglearn': ['Español'],
      'aboutme': 'Student',
      'like': ['music', 'technology']
    }
  ]
};