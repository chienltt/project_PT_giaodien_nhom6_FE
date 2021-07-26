import firebase  from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDxLYTcXUxlQmjT2O20eLfWWZYnFK-bOl4",
    authDomain: "my-project-1611736046452.firebaseapp.com",
    projectId: "my-project-1611736046452",
    storageBucket: "my-project-1611736046452.appspot.com",
    messagingSenderId: "846243212353",
    appId: "1:846243212353:web:4100fbf705f400d511eac0",
    measurementId: "G-XNVC94Q92M"
};

firebase.initializeApp(firebaseConfig)

const storage =firebase.storage();

export default storage;