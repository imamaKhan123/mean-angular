var mongoose = require('mongoose');
var CompanySchema = new mongoose.Schema({
    companyID: String,
    companyName: String,
    companyPhone: String,
    companyEmail: String,
    companyAddress: String,
    companyDescription: String,
    updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Company', CompanySchema);  