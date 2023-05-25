const { getOperationalActivityDetailService, createOperationalActivityDetailService, updateOperationalActivityDetailService, deleteOperationalActivityDetailService } = require('../services/operational_activity_service');
async function getOperationalActivityDetailController(req, res) {
    let data = await getOperationalActivityDetailService();
    res.send(data);
}
async function createOperationalActivityDetailController(req, res) {
    let data = await createOperationalActivityDetailService(req.body);
    res.send(data);
}
async function updateOperationalActivityDetailController(req, res) {
    let data = await updateOperationalActivityDetailService(req.body);
    res.send(data);
}
async function deleteOperationalActivityDetailController(req, res) {
    let data = await deleteOperationalActivityDetailService(req.params.id);
    res.send(data);
}
module.exports = { getOperationalActivityDetailController, createOperationalActivityDetailController, updateOperationalActivityDetailController, deleteOperationalActivityDetailController };
