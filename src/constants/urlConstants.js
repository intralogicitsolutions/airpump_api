const urlConstants = {
	FRAMEWORK_DETAILS: '/',
	RISK_LIBRARY_DETAILS: '/',
	STEERING_DOCUMENT_DETAILS: '/',
	/* Domain */
	CONTROL_LIBRARY_DOMAIN: '/',
	POST_CONTROL_LIBRARY_DOMAIN: '/create',
	PUT_CONTROL_LIBRARY_DOMAIN: '/update',

	/* Chapter */
	CONTROL_LIBRARY_CHAPTER: '/',
	POST_CONTROL_LIBRARY_CHAPTER: '/create',
	PUT_CONTROL_LIBRARY_CHAPTER: '/update',

	/* Control */
	CONTROL_LIBRARY_CONTROL: '/',
	POST_CONTROL_LIBRARY_CONTROL: '/create',
	PUT_CONTROL_LIBRARY_CONTROL: '/update',

	/* Control Action */
	CONTROL_LIBRARY_ACTION: '/',
	POST_CONTROL_LIBRARY_ACTION: '/create',
	PUT_CONTROL_LIBRARY_ACTION: '/update',
	DELETE_CONTROL_LIBRARY_ACTION: '/delete/:id',

	/* Action */
	ACTION: '/',
	POST_ACTION: '/create',
	PUT_ACTION: '/update',

	/* Operational Activity */
	OPERATIONAL_ACTIVITY: '/',
	POST_OPERATIONAL_ACTIVITY: '/create',
	PUT_OPERATIONAL_ACTIVITY: '/update',
	DELETE_OPERATIONAL_ACTIVITY: '/delete/:id',

	/* User */
	USER_SIGNUP: '/signup',
	USER_SIGNIN: '/signin',
	GET_USER: '/',
	DELETE_USER: '/delete/:id',
	UPDATE_USER: '/update'
};
module.exports = urlConstants;
