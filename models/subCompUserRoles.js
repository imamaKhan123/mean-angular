var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var subCompSchema = new Schema({
    _id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    name: {type: String} ,
    customerManage: {type: Boolean ,default: false } ,
    inquiryManage: {type: Boolean,default: false} ,
    categoryManage:{type:Boolean ,default: false },
    templateManage:{type:String ,default: false},
    isCompanyAdmin:{type:Boolean ,default: false},
    isCommonUser: {type:Boolean ,default: false},
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
module.exports = mongoose.model('subCompUser',subCompSchema);