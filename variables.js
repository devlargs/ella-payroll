module.exports.config = (process.env.NODE_ENV == 'development') ? {
    host: 'localhost',
    user: 'root',
    password: (process.platform == 'linux') ? 'Z1x2c3V42015' : '',
    database: 'esl',
} : {
    to: 'be configured'
};