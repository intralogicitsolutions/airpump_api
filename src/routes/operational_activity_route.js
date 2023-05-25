const func = require('../config');
const router = require('express').Router();
const { getOperationalActivityDetailController, createOperationalActivityDetailController, updateOperationalActivityDetailController, deleteOperationalActivityDetailController } = require('../controller/operational_activity_controller');

router.get(func.url.OPERATIONAL_ACTIVITY, getOperationalActivityDetailController);
router.post(func.url.POST_OPERATIONAL_ACTIVITY, createOperationalActivityDetailController);
router.put(func.url.PUT_OPERATIONAL_ACTIVITY, updateOperationalActivityDetailController);
router.delete(func.url.DELETE_OPERATIONAL_ACTIVITY, deleteOperationalActivityDetailController);


module.exports = router;
