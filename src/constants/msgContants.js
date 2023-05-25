let msgJson = {
	successJson: {
		status: 'success',
		statusCode: 200,
	},
	errJson: {
		status: 'fail',
		statusCode: 400,
		message: '',
	},
	forbidden: { status: 'fail', statusCode: 401 },
};

module.exports = msgJson;
