const UserSchema = require('../model/user_details_model');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const initVector = crypto.randomBytes(16);

const generateToken = (req, res, net) => {
	const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
	let encryptedData = cipher.update(body.password, 'utf-8', 'hex');
	encryptedData += cipher.final('hex');
	body['password'] = encryptedData;
};
