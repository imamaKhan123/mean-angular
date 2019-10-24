var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    _id : {type :mongoose.Schema.ObjectId , required:true ,unique:true},
    inSysRole: {type: mongoose.Types.ObjectId, ref: 'sysUser'},
    inCompRole:{type: mongoose.Types.ObjectId, ref: 'subCompUser'},
    profilePic: {type:String},
    name: {type: String} ,
    email: {type:String , unique:true, required:true},
    bio: {type: String} ,
    address: {type: String} ,
    phone: {type: String} ,
    isEmailVerified: {type: Boolean} ,
    isSubCompanyUser: {type: Boolean} ,
    company: {type: mongoose.Schema.Types.ObjectId} ,
    premium : {type: Boolean},
    template:{type:String}
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('newUser',schema);