var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var SubscriptionSchema = new Schema({
    _id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    title: {type: String} ,
    description: {type: String} ,
    type: {type: String} ,
    isAdmin: {type: Boolean ,default: false} ,
    price:{type:Number}
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('SubscriptionPlan',SubscriptionSchema);