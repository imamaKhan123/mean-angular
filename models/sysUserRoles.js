var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var sysUserSchema = new Schema({
    //_id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    id: String,
    name:  String,
    subscriptionManage: Boolean ,
    isAdmin: Boolean,
    compManage:Boolean,
    subCompAccountManage:Boolean,
    roleManage: Boolean 
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