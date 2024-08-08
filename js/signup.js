import { signInByEmailPassword, signInWithGoogle, signUpByEmailPassword } from  "../firebase/FirebaseFunction.js"

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add('right-panel-active');
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove('right-panel-active');
// });

// login with google
// let googleLoginBtn = document.getElementById('google-login');
// googleLoginBtn.addEventListener('click', async () => await signInWithGoogle());

// Nut Dang Ky
const signUpBtnForm = document.getElementById("signup-btn");
signUpBtnForm.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value; 
    const pass = document.getElementById("signup-pass").value;
    console.log(email, pass);
    await signUpByEmailPassword(email, pass);
} );

// const signInBtnForm = document.getElementById("signin-btn")
// signInBtnForm.addEventListener("click", async(e) => {
//     e.preventDefault();
//     const email = document.getElementById("signin-email").value;
//     const pass = document.getElementById("signin-pass").value;
//     await signInByEmailPassword(email, pass);
// })