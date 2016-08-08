// app/models/field.js

var mongoose	= require('mongoose');
var Schema	= mongoose.Schema;

var FieldOfStudy = new Schema({
	fieldName: String,
	subjects: [{type: Schema.Types.ObjectId, ref:'Subject'}]
});


module.exports = mongoose.model('Field', FieldOfStudy);