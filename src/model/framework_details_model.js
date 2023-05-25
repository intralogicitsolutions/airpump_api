const mongoose = require('mongoose');
const frameworkDetailSchema = mongoose.Schema({
	id: { type: String },
	title: { type: String, required: true },
	description: { type: String, required: true },
	created_at: { type: Date, default: Date.now, required: true },
	updated_at: { type: Date, default: Date.now, required: true },
	is_deleted: { type: Boolean, default: false, required: true },
	status: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model('framework_details', frameworkDetailSchema);
