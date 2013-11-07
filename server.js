var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	db = require('./db/schema');

var app = express();
app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, 'public')));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

require('./routes/books')(app, db);

var port = 4711;
app.listen( port, function() {
	console.log( 'Express server listening on port %d in %s mode',
		port, app.settings.env );
});

