/*Express.js is a serverside framework for Node.js
it helps run and manage a server.

once Node.js in installed, we open the Command Prompt, CP
and type npm install -g express
this is to install expres globally

-g  vs the normal  --save
will allow us to put express into the node terminal?


DIFFERENT WAYS TO START A SERVER:
NPM START  vs   NODE APP


Steps to create Express server:

-go to project folder in CP.
-type npm init.  This creates the package.JSON

//NOTE apparently can only use --save method when the package.JSON is already created?

-in the package.json file, change the "main" from "index.js"  to "app.js"
-create that app.js file
-then in CP type npm install --save express
-this adds the section of "dependencies": {"express":"^4.15.5"} into the package.json

- then in teh app.js you must create:
var express = require('express');
var app = express();
var port = 8000;



//for the server:   //SYNCHRONOUS / WORSE MOTHOD:

app.listen(port);
console.log("Express server has started");

//the structure above is completely synchronous/in order,
so if there is a problem before we get to the console.log, we would not know.
Therefore another, better method to get a message is a "callback"
The part above gets re-written as:


//for the server:   //ASYNCHRONOUS / BETTER MOTHOD:

app.listen(port,function(err, res) {
if (err) {
  console.log("Error. Problem with server");
} else {
console.log("Express server has started on port ####");
}
});

This is asynchronous and you well get message back even if there is an error


-Then to start the server, in CP, type "node app", or "node app.js"
-should see in CP the console.log message that we set above



NODEMON  automatically restarts the server whenever changes are made in any of the server files, after a file is-resaved

-in CP type "npm install -g nodemon"
-then can run nodemon by typing in CP "nodemon app"  (nodemon + name of our app, which here we've called app.js)
-should see our message in CP console.log("Express server has started");


Middleware is  any/all functions that invoked by Express.js routing layer
before the final request handler is made

each time we use the request/response  req/res

though all middleware functions have a 3rd optional parameter "next"
... .use(function(req, res, next) {
.
.
next();
}

which is needed to pass along a req to the next function in the chain

the last function in the chain, does not need the "next" parameter
if not the last function, "next" must be used:
...function(req, res, next) {
.
.
next();
}


app.use will run middleware on all requests
vs
app.get will  run ... something to just one particular middleware?



our routes are defined by either:
GET  ,   PUT,   PORT,   DELETE

app.get('/', function (req, res){
  res.render('index');
})

1st parameter: the '/'  sets the location of our route
2nd paramter: is a function that accepts a req and res object
req represents incomming HTTP requests
res is something you give to the user, such a webpage, an image, or data like JSON or XML


response, res,  can be:
res.render
res.send
.
.
.
.














//Can probably ignore below

then type "express" in the CP,  DID NOT WORK ??
was just a part of the course that is a quick run through
that I took notes on to try and follow:


I ran npm init, this created the package.JSON file
I then entered the dependencies manually into the JSON file from the course:

"dependencies": {
  "express": "~4.9.0",
  "body-parser": "~1.8.1",
  "cookie-parser": "~1.3.3",
  "morgan": "~1.3.0",
  "serve-favicon": "~2.1.3",
  "debug": "~2.1.3",
  "jade": "~1.6.0"
},

then ran npm intsall, which installs all these into the create node modules folder


the package.json  should have a line for "npm start" that is connected to the www/bin file?
node ./bin/www  ?

which contains the app.listen() which starts the server

starting the server is done via the app.listen() method.
Example:
var server = app.listen(app.get('port'),function(){


in the bin/www file you can inlcude a console.log
to display in the CP that the server has started

then you can also open browser and go to localhost:3000
(or 3000 is whatever you set it to)
and it should display:

"Express
Welcome to Express"



*/
