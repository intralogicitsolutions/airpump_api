const riskLibrarySchema = require('../model/risk_library_details_model');
const func = require('../config');
const getRiskLibraryService = () => {
	let res = { ...func.msg.successJson };
	return new Promise(async function (resolve) {
		riskLibrarySchema.find(function (err, result) {
			if (err) {
				console.log(err);
				return resolve([{ err }]);
			}
			res.data = result;
			return resolve(res);
		});
	});
};

module.exports = getRiskLibraryService;
