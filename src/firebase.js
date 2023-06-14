import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCeKgJogVcJzmgIsR9GXFunJB_aqgD6-4g",
    authDomain: "alizagram-3b85d.firebaseapp.com",
    projectId: "alizagram-3b85d",
    storageBucket: "alizagram-3b85d.appspot.com",
    messagingSenderId: "396175252581",
    appId: "1:396175252581:web:3a301c91807ed4d35bba8c"
  }).auth();