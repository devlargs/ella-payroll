module.exports.config = (process.env.NODE_ENV == 'development') ? {
    client: 'mysql',
    connection : {
        host: 'localhost',
        user: 'root',
        password: 'Z1x2c3V42015',
        database: 'esl'
    }
} : {
    to: 'be configured'
};

module.exports.checkSession = function(){
    var user = JSON.parse(localStorage.getItem('$shaEs5i8^7u0L9&a@!iR4a2m'));

    if(user){
        if(typeof user == 'object'){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};