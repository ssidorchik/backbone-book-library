# Backbone Book Library
Book Library RESTful application built as an exercise from ["Developing Backbone.js Applications"](http://addyosmani.github.io/backbone-fundamentals)


## Technologies
* Backbone.js
* Express
* Mongodb


## Run Application
Install `bower`
	
	$ npm install -g bower
	
Install dependencies

	$ npm install && bower install
	
Download and install MongoDB from mongodb.org. There are detailed installation guides on the [website](http://docs.mongodb.org/manual/installation/).

Run MongoDB

	$ mongod --dbpath data
	
Run Express server:

	$ node server.js
	
Open [http://localhost:4711](http://localhost:4711) in browser