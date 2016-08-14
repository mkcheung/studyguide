// app/models/topic.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Topic = new Schema({
	title: String,
	description: String,
	subjects: [{type: Schema.Types.ObjectId, ref:'Subject'}],
	points: [{type: Schema.Types.ObjectId, ref:'Point'}]
});

module.exports = mongoose.model('Topic', Topic);