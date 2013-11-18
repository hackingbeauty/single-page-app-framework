* start server command: 

	bin/devserver

* start redis command: 

	redis-server

* start mongodb command:

	mongod

* start mongod console:

	mongo

* create a mongo collection:

	db.createCollection('collection name')

* use a specific database in mongo:

	use webrtc; (or other database/collection name)

* show all mongodb collections:

	db.getCollectionNames()

* to start in production mode:

	NODE_ENV=production node app.js


* use curl to test api calls

	curl http://localhost:3000/user/create -d {} (the -d option is for a post...ur passing a blank object as post data)


* to run all tests:

	npm test
