var bookshelf = require('./bookshelf');

exports.User = User = bookshelf.Model.extend({
    tableName: 'users',
    info: function () {
        return this.hasOne(UserInfo)
    }
})

exports.UserInfo = UserInfo = bookshelf.Model.extend({
    tableName: 'user_info',
    user: function () {
        return this.belongsTo(User)
    },
    job_title: function(){
        return this.hasOne(Job,'id','job_id')
    }
});

exports.Job = Job = bookshelf.Model.extend({
    tableName: 'job_titles',
})