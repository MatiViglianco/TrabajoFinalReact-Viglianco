import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFRA0yM_BYF4_20PsOtTTRLWfvFEbHMd0",
  authDomain: "coderhouse-ecommerce-viglianco.firebaseapp.com",
  projectId: "coderhouse-ecommerce-viglianco",
  storageBucket: "coderhouse-ecommerce-viglianco.appspot.com",
  messagingSenderId: "426757275562",
  appId: "1:426757275562:web:e238340d351c604816f5d3",
  measurementId: "G-9ZRY3VJEE2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
