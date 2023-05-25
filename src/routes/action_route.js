const func = require('../config');
const router = require('express').Router();
const {
	getActionDetailController,
	createActionDetailController,
	updateActionDetailController,
} = require('../controller/action_controller');

router.get(func.url.ACTION, getActionDetailController);
router.post(func.url.POST_ACTION, createActionDetailController);
router.put(func.url.PUT_ACTION, updateActionDetailController);

module.exports = router;
