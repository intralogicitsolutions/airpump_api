const steeringDocumentSchema = require('../model/steering_document_model');
const func = require('../config');
const getSteeringDocumentService = () => {
	let res = { ...func.msg.successJson };
	return new Promise(async function (resolve) {
		steeringDocumentSchema.find(function (err, result) {
			if (err) {
				console.log(err);
				return resolve([{ err }]);
			}
			res.data = result;
			return resolve(res);
		});
	});
};

module.exports = getSteeringDocumentService;
