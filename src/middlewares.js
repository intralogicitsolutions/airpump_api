var jwt = require('jsonwebtoken');

const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

function notFound(req, res, next) {
	res.status(404);
	const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
	next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
	/* eslint-enable no-unused-vars */
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
	});
}

// function verifyToken(req, res, next) {
// 	var token = req.headers['token'];
// 	if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

// 	jwt.verify(token, 'BkQ9Yuodl0JeaE6zKN9paQ==', function (err, decoded) {
// 		if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

// 		// if everything good, save to request for use in other routes
// 		req.userId = decoded.id;
// 		next();
// 	});
// }

passport.use(
	new JWTstrategy(
		{
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),

			secretOrKey: 'BkQ9Yuodl0JeaE6zKN9paQ==',
		},
		function (token, done) {
			console.log({ token });
			done(null, token.id);
		},
	),
);
module.exports = {
	notFound,
	errorHandler,
};
