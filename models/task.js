const mongoose = require('mongoose');

// TASK Schema
const TaskSchema = mongoose.Schema({
    context:  String,
    name: String,
    description: String,
    deadline:{ type: Date},
    status : String,
    isDone:{type: Boolean, default: false}, 
    company: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'Company'}, 
    User: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'}, 
    department: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'department'}
    
});

module.exports = mongoose.model('task',TaskSchema);

