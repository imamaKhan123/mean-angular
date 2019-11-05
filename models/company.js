var mongoose = require('mongoose');
var CompanySchema = new mongoose.Schema({
  user : {type: String},
  name: {type: String} ,
  description: {type: String} ,
  address: {type: String} ,
  additionalData: {type: mongoose.Schema.Types.Mixed},
  creation_dt:{type:Date,default: Date.now , require:true}
  });
  module.exports = mongoose.model('Company', CompanySchema);  