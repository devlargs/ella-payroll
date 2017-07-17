var firebase = require('firebase');

module.exports.firebase = firebase.initializeApp({
    apiKey: "AIzaSyC-BLCKDrb2Xpwe_AeMh7uYE9pP46MtwkU",
    authDomain: "ella-payroll.firebaseapp.com",
    databaseURL: "https://ella-payroll.firebaseio.com",
    projectId: "ella-payroll",
    storageBucket: "ella-payroll.appspot.com",
    messagingSenderId: "322735661027"
});

module.exports.checkUser = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            return user;
        } else {
            return null;
        }
    });
}