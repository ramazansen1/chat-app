// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! hangi giriş işlemlerini seçtiysek onları import etmemiz gerekir.
//! getAuth olması gerekiyor.
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//! Database veri gönderme
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdClxkpZhq3v6Od0F_qR1VlJyIkkjNgGE",
  authDomain: "chat-app-3ab28.firebaseapp.com",
  projectId: "chat-app-3ab28",
  storageBucket: "chat-app-3ab28.appspot.com",
  messagingSenderId: "240192625112",
  appId: "1:240192625112:web:32e6905381000e48377aad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! yetkilendirme işlemleri için gerekli kurulum
export const auth = getAuth(app);

//! google sağlayıcısı kurulum
export const provider = new GoogleAuthProvider();

//!  veri tabanı kurulum
export const db = getFirestore(app);
