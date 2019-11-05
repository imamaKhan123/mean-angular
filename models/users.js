const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// User Schema
const UserSchema = mongoose.Schema({
    profilePic: String,
    name:  String ,
    email: {type:String ,  unique: [true, "email must be unique"], required:true},
    bio: String ,
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
/*
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}*/
module.exports = mongoose.model('User',UserSchema);