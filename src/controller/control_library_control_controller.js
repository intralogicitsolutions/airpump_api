const { getControlLibraryControlDetailService, createControlLibraryControlDetailService,updateControlLibraryControlDetailService } = require('../services/control_library_control_service');
async function getControlLibraryControlDetailController(req, res) {
    let data = await getControlLibraryControlDetailService();
    res.send(data);
}
async function createControlLibraryControlDetailController(req, res) {
    let data = await createControlLibraryControlDetailService(req.body);
    res.send(data);
}
async function updateControlLibraryControlDetailController(req, res) {
    let data = await updateControlLibraryControlDetailService(req.body);
    res.send(data);
}
module.exports = { getControlLibraryControlDetailController, createControlLibraryControlDetailController, updateControlLibraryControlDetailController };
