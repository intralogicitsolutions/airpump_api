const func = require('../config');
const router = require('express').Router();
const getSteeringDocumentController = require('../controller/steering_document_controller');

router.get(func.url.STEERING_DOCUMENT_DETAILS, getSteeringDocumentController);

module.exports = router;
