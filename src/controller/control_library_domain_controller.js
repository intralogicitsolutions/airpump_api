const { getControlLibraryDomainDetailService, createControlLibraryDomainDetailService,updateControlLibraryDomainDetailService } = require('../services/control_library_domain_service');
async function getControlLibraryDomainDetailController(req, res) {
    let data = await getControlLibraryDomainDetailService();
    res.send(data);
}
async function createControlLibraryDomainDetailController(req, res) {
    let data = await createControlLibraryDomainDetailService(req.body);
    res.send(data);
}
async function updateControlLibraryDomainDetailController(req, res) {
    let data = await updateControlLibraryDomainDetailService(req.body);
    res.send(data);
}
module.exports = { getControlLibraryDomainDetailController, createControlLibraryDomainDetailController, updateControlLibraryDomainDetailController };
