var firebase = require('firebase');

module.exports.firebase = firebase.initializeApp({
    apiKey: "AIzaSyC-BLCKDrb2Xpwe_AeMh7uYE9pP46MtwkU",
    authDomain: "ella-payroll.firebaseapp.com",
    databaseURL: "https://ella-payroll.firebaseio.com",
    projectId: "ella-payroll",
    storageBucket: "ella-payroll.appspot.com",
    messagingSenderId: "322735661027"
});

var hashUser = module.exports.hashUser = 'r8a2l8p5h0lcaer4gb#22&82c2da6c795a84fb3d460$2IaR3A3m';

var checkUser = module.exports.checkUser = function () {
    if (localStorage.getItem(hashUser)) {
        return JSON.parse(localStorage.getItem(hashUser));
    } else {
        return null;
    }
}

module.exports.signOut = function () {
    console.log("tanginang yan")
    const auth = firebase.auth();

    auth.signOut().then(function () {
        toastr.success("Successfully Logout")
        setTimeout(function () {
            localStorage.removeItem(hashUser);
            localStorage.clear();
            location.href = "/";
        }, 2000)
    }).catch(function (error) {
        toastr.error(error);
    });
};