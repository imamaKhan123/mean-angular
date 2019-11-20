const mongoose = require('mongoose');

// Department Schema
const DepartmentSchema = mongoose.Schema({
    name:  String,
    description: String,
    createdAt:{ type: Date,  default: Date.now},
    isActive:{type: Boolean, default: false},  
    
});

module.exports = mongoose.model('department',DepartmentSchema);

