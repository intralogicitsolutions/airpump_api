const getSteeringDocumentService = require('../services/steering_document_service');
async function getSteeringDocumentController(req, res) {
	let data = await getSteeringDocumentService();
	res.send(data);
}

module.exports = getSteeringDocumentController;
