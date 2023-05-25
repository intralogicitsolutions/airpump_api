const { userSignupService, userSigninService, gertUserService, deleteUserService, updateUserService } = require('../services/user_service');
async function getUserController(req, res) {
	let data = await gertUserService();
	res.send(data);
}
async function userSignupController(req, res) {
	let data = await userSignupService(req.body);
	res.send(data);
}
async function userSigninController(req, res) {
	let data = await userSigninService(req.body);
	res.send(data);
}
async function deleteUserController(req, res) {
	let data = await deleteUserService(req.params.id);
	res.send(data);
}
async function updateUserController(req, res) {
	let data = await updateUserService(req.body);
	res.send(data);
}
module.exports = { userSignupController, userSigninController, getUserController, deleteUserController, updateUserController };
