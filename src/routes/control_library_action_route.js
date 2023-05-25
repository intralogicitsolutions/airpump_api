const func = require('../config');
const router = require('express').Router();
const { getControlLibraryActionDetailController, createControlLibraryActionDetailController, updateControlLibraryActionDetailController,deleteControlLibraryActionDetailController } = require('../controller/control_library_action_controller');

router.get(func.url.CONTROL_LIBRARY_ACTION, getControlLibraryActionDetailController);
router.post(func.url.POST_CONTROL_LIBRARY_ACTION, createControlLibraryActionDetailController);
router.put(func.url.PUT_CONTROL_LIBRARY_ACTION, updateControlLibraryActionDetailController);
router.delete(func.url.DELETE_CONTROL_LIBRARY_ACTION, deleteControlLibraryActionDetailController);


module.exports = router;
