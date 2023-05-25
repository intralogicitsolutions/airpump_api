const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const operationalActivityDetailSchema = mongoose.Schema({
	id: { type: Number, default: 0 },
	control_library_control_action_id: { type: ObjectId, required: true },
	title: { type: String, required: true },
	assigned_to_user_id: { type: ObjectId },
	supervised_by_user_id: { type: ObjectId },
	opened_date: { type: Date, default: Date.now },
	state: { type: String, default: 'Open' },
	completed_percentage: { type: String, default: '0' },
	description: { type: String, required: true },
	due_date: { type: Date, default: Date.now },
	comments: { type: String },
	created_by: { type: ObjectId },
	modified_by: { type: ObjectId },
	created_at: { type: Date, required: true, default: Date.now },
	updated_at: { type: Date, required: true, default: Date.now },
	is_deleted: { type: Boolean, required: true, default: false },
	status: { type: Number, required: true, default: 1 },
});
module.exports = mongoose.model('operational_activity_details', operationalActivityDetailSchema);
