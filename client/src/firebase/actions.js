// Setup and Export all firebase functions here

import firebase, { usersRef } from './firebase'

export var auth = firebase.auth().currentUser;

export var signup = (email, password, username, name, number, title, gender) => {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        usersRef.child(auth.uid).set({
          userID: auth.uid,
          email,
          password,
          username,
          name,
          title,
          gender,
          number
        }).then((userData) => {
          resolve(userData);
        })
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        reject(error);
      })
  })
}

export var login = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  })
}

// On Change of Authentication State
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('User is Signed in')
  } else {
    console.log('No User signed in')
  }
});