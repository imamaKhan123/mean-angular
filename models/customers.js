var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var CatSchema = new Schema({
    _id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    company : {type :mongoose.Schema.Types.ObjectId , ref: 'companies'},
    name: {type: String} ,
    email: {type:String , unique:true, required:true},
    bio: {type: String} ,
    address: {type: String} ,
    phone: {type: String} ,
    additionalData: {type: mongoose.Schema.Types.Mixed},
    creation_dt:{type:Date,default: Date.now, require:true},
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('Customer',CatSchema);