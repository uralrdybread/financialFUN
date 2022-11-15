export const environment = {
  firebase: {
    projectId: 'projectfun-1bbcd',
    appId: '1:563954496317:web:683c19ca03b946acc90b54',
    storageBucket: 'projectfun-1bbcd.appspot.com',
    locationId: 'us-west2',
    apiKey: 'AIzaSyBzp16FgT_NpE3b7ZgU64-0ITrTSbs707o',
    authDomain: 'projectfun-1bbcd.firebaseapp.com',
    messagingSenderId: '563954496317',
    measurementId: 'G-Y6KN0W262R',
  },
  production: true
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzp16FgT_NpE3b7ZgU64-0ITrTSbs707o",
  authDomain: "projectfun-1bbcd.firebaseapp.com",
  projectId: "projectfun-1bbcd",
  storageBucket: "projectfun-1bbcd.appspot.com",
  messagingSenderId: "563954496317",
  appId: "1:563954496317:web:683c19ca03b946acc90b54",
  measurementId: "G-Y6KN0W262R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

