/*
 * app.js - Express server with routing
*/

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global */

// ------------ BEGIN MODULE SCOPE VARIABLES --------------
'use strict';
var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    routes  = require( './lib/routes' ),
    app     = express(),
    server  = http.createServer( app );


// ------------- BEGIN SERVER CONFIGURATION ---------------
app.configure( function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(app.router);
});

app.configure( 'development', function () {
    app.use( express.logger() );
    app.set('view options', { pretty: true });
    app.locals.pretty = true;
    app.use( express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure( 'production', function () {
  app.use( express.errorHandler() );
});

routes.configRoutes( app, server );
// -------------- END SERVER CONFIGURATION ----------------

// ----------------- BEGIN START SERVER -------------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);

// app.get('/', routes.index);
// app.get('/users', user.list);
