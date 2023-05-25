const mongoose = require('mongoose');
const riskLibraryDetailSchema = mongoose.Schema({
	id: { type: String },
	title: { type: String, required: true },
	description: { type: String, required: true },
	created_at: { type: Date, required: true, default: Date.now },
	updated_at: { type: Date, required: true, default: Date.now },
	is_deleted: { type: Boolean, default: false, required: true },
	status: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model('risk_library_details', riskLibraryDetailSchema);
