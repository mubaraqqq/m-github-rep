import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCtUG23vYAXvuRYfg6-CYNjuG9Z0LePA3s",
    authDomain: "bitmama-github.firebaseapp.com",
    projectId: "bitmama-github",
    storageBucket: "bitmama-github.appspot.com",
    messagingSenderId: "954289281808",
    appId: "1:954289281808:web:5b4a56e58243b08a47e395",
    measurementId: "G-FSXTB1DBB6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default {
      app,
      analytics
  }