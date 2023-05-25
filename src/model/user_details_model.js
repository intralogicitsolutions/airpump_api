const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
const userSchema = mongoose.Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	department: { type: String, required: true },
	job_role: { type: String, required: true },
	email: { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true },
	phone_number: { type: String, required: true, index: { unique: true } },
	created_at: { type: Date, required: true, default: Date.now },
	updated_at: { type: Date, required: true, default: Date.now },
	is_deleted: { type: Boolean, required: true, default: false },
	status: { type: Number, required: true, default: 1 },
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('user_details', userSchema);
