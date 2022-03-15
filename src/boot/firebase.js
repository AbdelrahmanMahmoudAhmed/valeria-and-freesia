// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnnZqSZhvlJZDodoOmC9aiGQ8r_F6ysoI",
  authDomain: "bee-company-d8e7f.firebaseapp.com",
  projectId: "bee-company-d8e7f",
  storageBucket: "bee-company-d8e7f.appspot.com",
  messagingSenderId: "727954439752",
  appId: "1:727954439752:web:24e4c6d3ba37204bb7e27d",
  measurementId: "G-PKY6V8JE79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const analytics = getAnalytics(app);
const db = getFirestore(app);

//collection ref
const theCollection = collection(db, "oil-products");

//get collection data
// getDocs(theCollection)
//   .then((snapshot) => {
//     let info = [];
//     snapshot.docs.forEach((item) => {
//       info.push({ ...item.data(), id: item.id });
//     });
//     console.log(info);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

export { getFirestore, theCollection, addDoc };
