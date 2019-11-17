const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var  SALT_WORK_FACTOR = 10;
var jwt = require('jsonwebtoken');
// User Schema
const UserSchema = mongoose.Schema({
    profilePic: String,
    name:  String ,
    email: {
      type: String,
      unique: true
    },
    bio: String ,
    hash: String,
    salt: String,
    password:String,
    address:  String ,
    phone: String ,
    isEmailVerified:  Boolean,
    isSubCompanyUser: Boolean,
    premium : Boolean,
    template:String,
    company: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'Company'}, 
    SysUserRole: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'sysUser'}, 
    SubCompUserRole: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'subCompUser'}
    
});
UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});

module.exports = mongoose.model('User',UserSchema);
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}
module.exports.isValid = function(hashedpassword, user){
  console.log(user.password);
  console.log(hashedpassword);
  return  bcrypt.compareSync(hashedpassword,user.password);
}
module.exports.getUserByname = function(name, callback){
  const query = {name: name}
  User.findOne(query, callback);
}
module.exports.getUserByemail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}
module.exports.comparePassword = function(candidatePassword, user,cb) {
 // console.log(candidatePassword);
 // console.log("paaswor",user.password);
  bcrypt.compare(candidatePassword, user.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });

};

