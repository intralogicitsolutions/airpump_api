const func = require('../config');
const router = require('express').Router();
const { getControlLibraryDomainDetailController, createControlLibraryDomainDetailController, updateControlLibraryDomainDetailController } = require('../controller/control_library_domain_controller');

router.get(func.url.CONTROL_LIBRARY_DOMAIN, getControlLibraryDomainDetailController);
router.post(func.url.POST_CONTROL_LIBRARY_DOMAIN, createControlLibraryDomainDetailController);
router.put(func.url.PUT_CONTROL_LIBRARY_DOMAIN, updateControlLibraryDomainDetailController);


module.exports = router;
