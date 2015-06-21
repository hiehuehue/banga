var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Post = new Schema({
	title: {type:String, required: true},
	mainbody:{type:String, required: true},
	author: {type:String, required: true},
	type: {type: String, required:true},
	tags: [{type: String}],
	cover_pic: String,
	more_pics: [{type: String}],
	expiry: Date,
	created_at: Date,
	modified_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', Post);