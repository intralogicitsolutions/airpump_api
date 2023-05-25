const func = require('../config');
const router = require('express').Router();
const { getControlLibraryChapterDetailController, createControlLibraryChapterDetailController, updateControlLibraryChapterDetailController } = require('../controller/control_library_chapter_controller');

router.get(func.url.CONTROL_LIBRARY_CHAPTER, getControlLibraryChapterDetailController);
router.post(func.url.POST_CONTROL_LIBRARY_CHAPTER, createControlLibraryChapterDetailController);
router.put(func.url.PUT_CONTROL_LIBRARY_CHAPTER, updateControlLibraryChapterDetailController);


module.exports = router;
