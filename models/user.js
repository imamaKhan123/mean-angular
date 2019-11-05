var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
 //   _id : {type :mongoose.Schema.ObjectId , required:true ,unique:true},
    /*inSysRole: {
        name:String ,
        customerManage: Boolean,
        inquiryManage:  Boolean,
        categoryManage: Boolean ,
        templateManage:String ,
        isCompanyAdmin:Boolean ,
        isCommonUser: Boolean ,
        roleManage:Boolean ,
    },
    inCompRole:{
        name: String,
        subscriptionManage: Boolean ,
        isAdmin:  Boolean ,
        compManage: Boolean ,
        subCompAccountManage: String ,
        roleManage: Boolean ,
    },*/
  ////  inSysRole:{type: mongoose.Schema.Types.ObjectId, 
    //    ref: 'sysUser'}, 
 ////   inCompRole:{type: mongoose.Schema.Types.ObjectId, 
     //   ref: 'subCompUser'}, 
    profilePic: String,
    name:  String ,
    email: {type:String , unique:true, required:true},
    bio: String ,
    address:  String ,
    phone: String ,
    password: String ,
    isEmailVerified:  Boolean,
    isSubCompanyUser: Boolean,
    premium : Boolean,
    template:{type: mongoose.Schema.Types.ObjectId, 
        ref: 'CompanyTemplates'},
    company: {type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company'},
    SysUserRole:{type: mongoose.Schema.Types.ObjectId, 
        ref: 'sysUser'},
    SubCompUserRole:{type: mongoose.Schema.Types.ObjectId, 
        ref: 'subCompUser'}
    
});
schema.path('email').validate(async (value) => {
    const emailCount = await mongoose.models.User.countDocuments({email: value });
    return !emailCount;
  }, 'Email already exists');
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('newUser',schema);