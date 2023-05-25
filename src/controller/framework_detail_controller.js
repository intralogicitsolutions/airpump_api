const getFrameworkDetailService = require('../services/framework_detail_service');
async function getFrameworkDetailController(req, res) {
	let data = await getFrameworkDetailService();
	res.send(data);
}

module.exports = getFrameworkDetailController;
