var firebase = require('firebase');
var hashUser = module.exports.hashUser = 'r8a2l8p5h0lcaer4gb#22&82c2da6c795a84fb3d460$2IaR3A3m';

module.exports.firebase = firebase.initializeApp({
    apiKey: "AIzaSyC-BLCKDrb2Xpwe_AeMh7uYE9pP46MtwkU",
    authDomain: "ella-payroll.firebaseapp.com",
    databaseURL: "https://ella-payroll.firebaseio.com",
    projectId: "ella-payroll",
    storageBucket: "ella-payroll.appspot.com",
    messagingSenderId: "322735661027"
});

module.exports.checkUser = function () {
    $("body").hide();

    if (localStorage.getItem(hashUser)) {
        var a = JSON.parse(localStorage.getItem(hashUser));
        if (location.pathname == '/') {
            location.href = "/dashboard";
        } else {
            $("body").show();
            $('.signOut').click(function () {
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
            })
        }
    } else {
        if (location.pathname != '/') {
            $("body").html("<h3> &nbsp;&nbsp;You are not allowed to access this page. Please log in to your account. Redirecting....</h3>");
            $("body").show();
            setTimeout(function () { toastr.success("Redirecting..."); }, 500);
            setTimeout(function () { location.href = "/"; }, 2500);
        } else {
            $("body").show();
        }
    }
}

module.exports.images = {
    user: 'https://firebasestorage.googleapis.com/v0/b/ella-payroll.appspot.com/o/users%2Fdefault-user.png?alt=media&token=364f8cc4-63f3-4144-b010-da270d546eba'
}