var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var companiesSchema = new Schema({
    _id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {type: String} ,
    description: {type: String} ,
    address: {type: String} ,
    additionalData: {type: mongoose.Schema.Types.Mixed},
    creation_dt:{type:Date,default: Date.now , require:true}
  
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('Companies',companiesSchema);