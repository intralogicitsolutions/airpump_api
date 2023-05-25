const func = require('../config');
const router = require('express').Router();
const { getControlLibraryControlDetailController, createControlLibraryControlDetailController, updateControlLibraryControlDetailController } = require('../controller/control_library_control_controller');

router.get(func.url.CONTROL_LIBRARY_CONTROL, getControlLibraryControlDetailController);
router.post(func.url.POST_CONTROL_LIBRARY_CONTROL, createControlLibraryControlDetailController);
router.put(func.url.PUT_CONTROL_LIBRARY_CONTROL, updateControlLibraryControlDetailController);


module.exports = router;
