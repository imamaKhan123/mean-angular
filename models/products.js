var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var ProSchema = new Schema({
    _id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    company : {type :mongoose.Schema.Types.ObjectId , ref: 'companies'},
    user: {type :mongoose.Schema.Types.ObjectId , ref: 'User'},
    name : {type: String} ,
    description: {type: String} ,
    AdditionalFields: {type: mongoose.Schema.Types.Mixed} ,
    creation_dt:{type:Date,default: Date.now, require:true},
    category: {type :mongoose.Schema.Types.ObjectId , ref: 'Category' }
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('Product',ProSchema);