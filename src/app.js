require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
var passport = require('passport');
const session = require('express-session');
const connectDb = require('./config/db');
connectDb();
const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(session({ secret: 'my secret', saveUninitialized: false, resave: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', require('./routes/user_route.js'));

app.use(
	'/framework',
	passport.authenticate('jwt', { session: false }),
	require('./routes/framework_detail_route'),
);
app.use(
	'/controlLibraryDomain',
	// middlewares.verifyToken,
	passport.authenticate('jwt', { session: false }),
	require('./routes/control_library_domain_route'),
);
app.use(
	'/controlLibraryChapter',
	// middlewares.verifyToken,
	passport.authenticate('jwt', { session: false }),
	require('./routes/control_library_chapter_route'),
);
app.use(
	'/controlLibraryControl',
	// middlewares.verifyToken,
	passport.authenticate('jwt', { session: false }),
	require('./routes/control_library_control_route'),
);
app.use(
	'/controlLibraryAction',
	// middlewares.verifyToken,
	passport.authenticate('jwt', { session: false }),
	require('./routes/control_library_action_route'),
);
app.use(
	'/action',
	passport.authenticate('jwt', { session: false }),
	require('./routes/action_route'),
);
app.use(
	'/operationalActivity',
	// middlewares.verifyToken,
	passport.authenticate('jwt', { session: false }),
	require('./routes/operational_activity_route'),
);
app.use(
	'/riskLibrary',
	passport.authenticate('jwt', { session: false }),
	// middlewares.verifyToken,
	require('./routes/risk_library_route'),
);
app.use(
	'/steeringDocument',
	passport.authenticate('jwt', { session: false }),
	require('./routes/steering_document_route'),
);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
