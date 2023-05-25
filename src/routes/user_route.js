const func = require('../config');
const router = require('express').Router();
const {
	userSignupController,
	userSigninController,
	getUserController,
	deleteUserController,
	updateUserController,
} = require('../controller/user_controller');
const passport = require('passport');
// const middlewares = require('../middlewares');
router.post(func.url.USER_SIGNUP, userSignupController);
router.post(func.url.USER_SIGNIN, passport.authenticate('local'), userSigninController);
router.get(func.url.GET_USER, passport.authenticate('jwt', { session: false }), getUserController);
router.delete(
	func.url.DELETE_USER,
	passport.authenticate('jwt', { session: false }),
	deleteUserController,
);
router.put(
	func.url.UPDATE_USER,
	passport.authenticate('jwt', { session: false }),
	updateUserController,
);

module.exports = router;
