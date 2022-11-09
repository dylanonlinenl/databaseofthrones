import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBYANOEqUxvPuRMtPql938EM9J_DD1S5JM",
  authDomain: "databaseofthrones.firebaseapp.com",
  projectId: "databaseofthrones",
  storageBucket: "databaseofthrones.appspot.com",
  messagingSenderId: "102089177296",
  appId: "1:102089177296:web:f7704157eb959821a806d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
