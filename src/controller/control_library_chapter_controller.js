const { getControlLibraryChapterDetailService, createControlLibraryChapterDetailService,updateControlLibraryChapterDetailService } = require('../services/control_library_chapter_service');
async function getControlLibraryChapterDetailController(req, res) {
    let data = await getControlLibraryChapterDetailService();
    res.send(data);
}
async function createControlLibraryChapterDetailController(req, res) {
    let data = await createControlLibraryChapterDetailService(req.body);
    res.send(data);
}
async function updateControlLibraryChapterDetailController(req, res) {
    let data = await updateControlLibraryChapterDetailService(req.body);
    res.send(data);
}
module.exports = { getControlLibraryChapterDetailController, createControlLibraryChapterDetailController, updateControlLibraryChapterDetailController };
