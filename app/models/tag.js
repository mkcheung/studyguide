// app/models/tag.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tag = new Schema({
	title = String,
	description = String
});

module.express = mongoose.model('Tag', Tag);