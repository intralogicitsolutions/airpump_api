const func = require('../config');
const router = require('express').Router();
const getFrameworkDetailController = require('../controller/framework_detail_controller');

router.get(func.url.FRAMEWORK_DETAILS, getFrameworkDetailController);

module.exports = router;
