var hash = {
    currentUser: '96f54dd40bb88d27102b95562136d549'
}

var reverseString = function(str){
    return str.split("").reverse().join("");
}

module.exports.encrypt = function(name, data){
    localStorage.setItem(hash[name], reverseString(encodeURIComponent(JSON.stringify(data))));
}

module.exports.decrypt = function(name){
    var decrypted = JSON.parse(decodeURIComponent(reverseString(localStorage.getItem(hash[name]))));
    console.log(decrypted)
    return decrypted;
}