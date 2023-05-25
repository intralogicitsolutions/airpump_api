const { getControlLibraryActionDetailService, createControlLibraryActionDetailService, updateControlLibraryActionDetailService, deleteControlLibraryActionDetailService } = require('../services/control_library_action_service');
async function getControlLibraryActionDetailController(req, res) {
    let data = await getControlLibraryActionDetailService();
    res.send(data);
}
async function createControlLibraryActionDetailController(req, res) {
    let data = await createControlLibraryActionDetailService(req.body);
    res.send(data);
}
async function updateControlLibraryActionDetailController(req, res) {
    let data = await updateControlLibraryActionDetailService(req.body);
    res.send(data);
}
async function deleteControlLibraryActionDetailController(req, res) {
    let data = await deleteControlLibraryActionDetailService(req.params.id);
    res.send(data);
}
module.exports = { getControlLibraryActionDetailController, createControlLibraryActionDetailController, updateControlLibraryActionDetailController, deleteControlLibraryActionDetailController };
