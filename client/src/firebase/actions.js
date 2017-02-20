// Setup and Export all firebase functions here

import firebase, { usersRef } from './firebase'

import { browserHistory } from 'react-router';

export var userID;

export var signup = (email, password, username, name, number, title, gender) => {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Save user data to database
        usersRef.child(firebase.auth().currentUser.uid).set({
          userID: firebase.auth().currentUser.uid,
          email,
          password,
          username,
          name,
          title,
          gender,
          number
        }).then((userData) => {
          resolve();
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

export var logout = () => {
  firebase.auth().signOut().then(() => {
    console.log('User signed Out!')
  }, (error) => {
    console.log(error.message, 'Please check network connectivity')
  });
}

export var saveUserData = (uid) => {
  return new Promise((resolve, reject) => {
    usersRef.child(uid).once('value').then((snapshot) => {
      window.localStorage.setItem('userData', JSON.stringify(snapshot.val()));
      usersRef.child(uid).on('value', (userData) => {
        window.localStorage.setItem('userData', JSON.stringify(userData.val()));
      });
      resolve();
    }, () => {
      reject();
    })
  })
}

// On Change of Authentication State
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    userID = user.uid;
    console.log('User just Signed in');
    saveUserData(userID).then(() => {
      browserHistory.push('/dashboard')
    })
  } else {
    console.log('No User signed in');
    window.localStorage.clear();
    browserHistory.push('/')
  }
});