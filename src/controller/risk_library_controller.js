const getRiskLibraryService = require('../services/risk_library_service');
async function getRiskLibraryController(req, res) {
	let data = await getRiskLibraryService();
	res.send(data);
}

module.exports = getRiskLibraryController;
