const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const controlLibraryDetailSchema = mongoose.Schema({
	id: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String },
	control_library_domain_id: { type: ObjectId, required: true },
	control_library_chapter_id: { type: ObjectId, required: true },
	created_at: { type: Date, required: true, default: Date.now },
	updated_at: { type: Date, required: true, default: Date.now },
	is_deleted: { type: Boolean, required: true, default: false },
	status: { type: Number, required: true, default: 1 },
});
module.exports = mongoose.model('control_library_control_details', controlLibraryDetailSchema);
