const frameworkDetailSchema = require('../model/framework_details_model');
const func = require('../config');
const getFrameworkDetailService = () => {
	let res = { ...func.msg.successJson };
	return new Promise(async function (resolve) {
		frameworkDetailSchema.find(function (err, result) {
			if (err) {
				console.log(err);
				return resolve([{ err }]);
			}
			res.data = result;
			return resolve(res);
		});
	});
};

module.exports = getFrameworkDetailService;
