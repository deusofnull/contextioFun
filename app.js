var express = require('express');
var http = require('http');
var conextIO = require('contextio');
var colors = require('colors');

var contextClient = new conextIO.Client( {
	key: '3skpolx5',
	secret: 'w2WEzyllSsfC3Vnw'
});
/*

contextClient.accounts().get(
	{limit:5},
	function(error, response, request){
		if (error) throw error;
		console.log( "host: " + request.host)
		console.log( "path: " + request.path)
		console.log("statusCode: " + response.statusCode);
		console.log("response: " + JSON.stringify(response.body));

	});

contextClient.accounts().get({limit:5},function(err, response, request){
		if (error) throw error;
		console.log("=======");
		console.log(response.body);

	});
*/

contextClient.accounts().get({limit:15}, function (err, response) {
    if (err) throw err;
    console.log(colors.yellow(
    	JSON.stringify(
    		response.body[0],null, " ")
    	)
    );

    for (i in response.body){
    	var firstName = response.body[i].first_name;
    	var lastName = response.body[i].last_name;
    	console.log(colors.green(firstName));
    	console.log(colors.blue(lastName));
    }

});




/*
var user_id = '54e2a7922832f3203566fba4' // willyach07 inbox user id
var label = 0 // email account instance label, currently 0

var getFoldersPath = "/lite/users/" +  user_id  + "/email_accounts/" + 0 + "/folders"

console.log(getFoldersPath);

var requestOptions = {
	hostname : 'https://api.context.io/',
	port : 80,
	method : 'GET',
	path : getFoldersPath
}
 
var request = http.request(requestOptions, function(response){
 	console.log("status: " + response.statusCode);
 	console.log('headers: ' + JSON.stringify(response.headers));
 	response.setEncoding('utf8');
 	response.on('data' , function(data) {
 		console.log("body: ", data);
 	});
 });


request.on('error', function(err){
	console.log('Will, ya fucked up... \n ' + err.message);
});

request.end();
*/