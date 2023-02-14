// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUqXDcJ4NCZer0zH2TQshoab6Bw74dQ_0",
  authDomain: "abdul-aziz-hotel-booking-app.firebaseapp.com",
  projectId: "abdul-aziz-hotel-booking-app",
  storageBucket: "abdul-aziz-hotel-booking-app.appspot.com",
  messagingSenderId: "912309055110",
  appId: "1:912309055110:web:c8af25a6b27c31b3896b07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
