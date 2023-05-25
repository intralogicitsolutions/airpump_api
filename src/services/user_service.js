const UserSchema = require('../model/user_details_model');
const func = require('../config');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
// crypto module
const crypto = require('crypto');

// generate 16 bytes of random data
const iv = "96e6c5b97fe6a40c";

// our secret message

// secret key
const key = "12345678123456781234567812345678";
const userSignupService = async (body) => {
	let res = { ...func.msg.successJson };
	return new Promise(async function (resolve) {
		const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
		let encryptedData = cipher.update(body.password, 'utf-8', 'hex');
		encryptedData += cipher.final('hex');
		body['password'] = encryptedData;
		const userSchema = new UserSchema(body);
		await userSchema.validate(async function (err, data) {
			if (err) {
				const keys = Object.keys(err.errors);
				keys.map((ele) => {
					func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind;
					return resolve(func.msg.errJson);
				});
			} else {
				await userSchema.save(function (err, result) {
					if (err) {
						if (err.code === 11000) {
							Object.keys(err.keyValue);
							func.msg.errJson['message'] = Object.keys(err.keyValue) + ' already exists';
							return resolve(func.msg.errJson);
						}
					} else {
						if (err) {
							return resolve([{ err }]);
						}
						res.data = result;
						return resolve(res);
					}
				});
			}
		});
	});
};

const userSigninService = async (body) => {
	return new Promise(async function (resolve) {
		func.msg.successJson['message'] = 'Loggedin successfully';
		resolve(func.msg.successJson);
	});
};

// use passport.authenticate('local') function as middlewares where authentication needed
//use this three functions globaly

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		function (username, password, done) {
			UserSchema.findOne({ email: username }, function (err, user) {
				console.log(user.password, key, iv);

				if (err) {
					return done(err);
				}
				if (!user) {
					func.msg.errJson['statusCode'] = 401;
					func.msg.errJson['message'] = 'Incorrect username.';
					return done(func.msg.errJson);
				}
				//needs validation method
				const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
				let decryptedData = decipher.update(user.password, 'hex', 'utf-8');
				decryptedData += decipher.final('utf8');
				if (decryptedData !== password) {
					func.msg.errJson['statusCode'] = 401;
					func.msg.errJson['message'] = 'Incorrect password.';
					return done(func.msg.errJson);
				}
				// func.msg.successJson['data'] = user;
				let token = jwt.sign({ id: user._id }, 'BkQ9Yuodl0JeaE6zKN9paQ==');
				func.msg.successJson['data'] = { token };
				return done(null, func.msg.successJson);
			});
		},
	),
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

// deserialize user object
passport.deserializeUser(function (err, done) {
	done(null, err);
});

const gertUserService = () => {
	let res = { ...func.msg.successJson };
	return new Promise(async function (resolve) {
		UserSchema.find(function (err, result) {
			if (err) {
				console.log(err);
				return resolve([{ err }]);
			}
			res.data = result;
			return resolve(res);
		});
	});
};

const deleteUserService = async (id) => {
	let res = { ...func.msg.successJson };
	return new Promise(async function (resolve) {
		const query = { _id: id };
		await UserSchema.deleteOne(query, function (err, result) {
			if (err) {
				return resolve([{ err }]);
			}
			res.data = result;
			return resolve(res);
		});
	});
};

const updateUserService = async (body) => {
	let res = { ...func.msg.successJson };
	return new Promise(async function (resolve) {
		const userSchema = new UserSchema(body);
		await userSchema.validate(async function (err, data) {
			if (err) {
				const keys = Object.keys(err.errors);
				keys.map((ele) => {
					func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind;
					return resolve(func.msg.errJson);
				});
			} else {
				const query = { _id: body._id };
				let update = {};
				update = body;
				await UserSchema.findOneAndUpdate(
					query,
					update,
					{ returnOriginal: false },
					function (err, result) {
						if (err) {
							return resolve([{ err }]);
						}
						res.data = result;
						return resolve(res);
					},
				);
			}
		});
	});
};
module.exports = {
	userSignupService,
	userSigninService,
	gertUserService,
	deleteUserService,
	updateUserService,
};
