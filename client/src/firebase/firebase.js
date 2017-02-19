import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID
  };

firebase.initializeApp(config);

export var db = firebase.database();
export var dbRef = db.ref();
export var usersRef = dbRef.child('users');


export default firebase;