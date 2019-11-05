var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var companyTemplatesSchema = new Schema({
    //_id : {type :mongoose.Schema.Types.ObjectId , required:true ,unique:true},
    company : {type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company'},
    title: {type: String} ,
    description: {type: String} ,
    inputFields: {type: String} ,
    creation_dt:{type:Date,default: Date.now, require:true}
  
});
/*
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
*/
module.exports = mongoose.model('CompanyTemplates',companyTemplatesSchema);