const mongoose = require('mongoose');
const steeringDocumentDetailSchema = mongoose.Schema({
	id: { type: String },
	url: { type: String, required: true },
	created_at: { type: Date, required: true, default: Date.now },
	updated_at: { type: Date, required: true, default: Date.now },
	is_deleted: { type: Boolean, default: false, required: true },
	status: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model('steering_document_details', steeringDocumentDetailSchema);
