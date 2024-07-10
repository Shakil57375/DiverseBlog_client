// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhBWgQeUHrXWwsz2o3CTbBM87eGS1qeI",
  authDomain: "diverse-blog.firebaseapp.com",
  projectId: "diverse-blog",
  storageBucket: "diverse-blog.appspot.com",
  messagingSenderId: "503923282360",
  appId: "1:503923282360:web:69e12cf540c5e853dd3f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;