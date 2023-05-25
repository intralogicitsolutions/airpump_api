const mongoose = require('mongoose');
const actionDetailSchema = mongoose.Schema({
	id: { type: String },
	title: { type: String, required: true },
	description: { type: String },
	created_at: { type: Date, required: true, default: Date.now },
	updated_at: { type: Date, required: true, default: Date.now },
	is_deleted: { type: Boolean, required: true, default: false },
	status: { type: Number, required: true, default: 1 },
});
module.exports = mongoose.model('action_details', actionDetailSchema);
