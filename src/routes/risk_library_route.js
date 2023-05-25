const func = require('../config');
const router = require('express').Router();
const getRiskLibraryController = require('../controller/risk_library_controller');

router.get(func.url.RISK_LIBRARY_DETAILS, getRiskLibraryController);

module.exports = router;
