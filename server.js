// import the HTTP Module

const http = require('http');

// define a port to listen too

const PORT = 7000;
const PORT2 = 7050;

// create a generic function to handle requests and resonses

function handleRequest(request, response) {

	// the below statement is triggered
	response.end("it Works!!! Path Hit: " + request.url);

}

// here we use the node http package tocreate our server. 
// we then pass it the handleRequest funtion to empower it with functionality
var server = http.createServer(handleRequest);

//  here we start our server so that it can begin listening to clientrequests.
server.listen(PORT, function() {

	// the below statement is trigger(server-side) when a user vistis the PORT URL
	console.log("You are an amazing person");

});

server.listen(PORT2, function() {

	console.log("You are a terrible person and should burn in hell")
})







