// Chứa cấu hình của firebase để kết nối và sử dụng

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcJO0Gf37GHps1WTIISQZfpmwJpxXJc9w",
    authDomain: "movies-minhtu.firebaseapp.com",
    projectId: "movies-minhtu",
    storageBucket: "movies-minhtu.appspot.com",
    messagingSenderId: "1045003673164",
    appId: "1:1045003673164:web:f4107ba6a1b11d542d9ee9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
