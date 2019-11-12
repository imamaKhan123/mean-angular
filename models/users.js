const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};
UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};
UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); 
};

module.exports = mongoose.model('User',UserSchema);
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByname = function(name, callback){
  const query = {name: name}
  User.findOne(query, callback);
}
module.exports.getUserByemail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.Hash = function(password, callback){
  bcrypt.genSalt(10, (err, salt) => {
    if(err) throw (err); 
    bcrypt.hash(password, salt, (err, hash) => {
      if(err) throw err;
      password = hash;
      console.log(password);
      return password;
      
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
