var bookshelf = require('./bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'users',
    info: function () {
        return this.hasOne(UserInfo)
    }
})

var UserInfo = bookshelf.Model.extend({
    tableName: 'user_info',
    user: function () {
        return this.belongsTo(User)
    }
});

exports.User = User;
exports.UserInfo = UserInfo;