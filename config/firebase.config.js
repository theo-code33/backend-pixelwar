const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyCuSwDgR29LTn3OoEwUaAy5KN98uyyQyFM",
    authDomain: "pixel-war-d2bf1.firebaseapp.com",
    projectId: "pixel-war-d2bf1",
    storageBucket: "pixel-war-d2bf1.appspot.com",
    messagingSenderId: "555688428042",
    appId: "1:555688428042:web:0eb39a0e5edd51f51195f3"
}

const firebaseApp = initializeApp(firebaseConfig);

module.exports = { firebaseApp };