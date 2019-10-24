var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userAccountSubscriptionSettingSchema = new Schema({
    _id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    selectedSubscription:{type: mongoose.Schema.Types.ObjectId, ref: 'selectedSubscription'},
    subscribedAt: {type:Date, default:Date.now},
    renewAt: {type:Date},
    isActive: {type:Boolean},
    stripeSubscriptionId:{type:String}
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('userAccountSubscriptionSetting',userAccountSubscriptionSettingSchema);