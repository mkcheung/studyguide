// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SubjectSchema   = new Schema({
    name: String,
    description: String,
    field: [{type: Schema.Types.ObjectId, ref:'Field'}]
});

module.exports = mongoose.model('Subject', SubjectSchema);