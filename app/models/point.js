// app/models/point.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Point = new Schema({
	title: String,
	source: String,
	argument: String,
	rebuttal: String,
	tags: [{type: Schema.Types.ObjectId, ref:'Tag'}]
});

module.exports = mongoose.model('Point', Point);