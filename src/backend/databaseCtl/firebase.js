// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCti6qAvuEIuEUQ8OPxvMqrZ_IeQ94xEIU",
    authDomain: "coin-shoppingweb.firebaseapp.com",
    databaseURL: "https://coin-shoppingweb-default-rtdb.firebaseio.com",
    projectId: "coin-shoppingweb",
    storageBucket: "coin-shoppingweb.appspot.com",
    messagingSenderId: "158673335688",
    appId: "1:158673335688:web:774a7708cf6b521f36f63d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);