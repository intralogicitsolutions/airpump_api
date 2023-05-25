const { getActionDetailService, createActionDetailService, updateActionDetailService } = require('../services/action_service');
async function getActionDetailController(req, res) {
    let data = await getActionDetailService();
    res.send(data);
}
async function createActionDetailController(req, res) {
    let data = await createActionDetailService(req.body);
    res.send(data);
}
async function updateActionDetailController(req, res) {
    let data = await updateActionDetailService(req.body);
    res.send(data);
}
module.exports = { getActionDetailController, createActionDetailController, updateActionDetailController};
