import firebase from 'firebase';

var app = firebase.initializeApp({
    apiKey: "AIzaSyC-BLCKDrb2Xpwe_AeMh7uYE9pP46MtwkU",
    authDomain: "ella-payroll.firebaseapp.com",
    databaseURL: "https://ella-payroll.firebaseio.com",
    projectId: "ella-payroll",
    storageBucket: "ella-payroll.appspot.com",
    messagingSenderId: "322735661027"
})

exports.app = app;

var a = function(data){
    data.structure.map(function(key){
        console.log(key)
        return key;
    })
}