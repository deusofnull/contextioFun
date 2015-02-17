var express = require('express');
var http = require('http');
var conextIO = require('contextio');
var colors = require('colors');

var contextClient = new conextIO.Client( {
	key: '3skpolx5',
	secret: 'w2WEzyllSsfC3Vnw'
});

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

