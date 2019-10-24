var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var sysUserSchema = new Schema({
    _id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    name: {type: String} ,
    subscriptionManage: {type: Boolean ,default: false} ,
    isAdmin: {type: Boolean ,default: false} ,
    compManage:{type:Boolean ,default: false},
    subCompAccountManage:{type:String ,default: false},
    roleManage: {type: Boolean ,default: false}
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('sysUser',sysUserSchema);