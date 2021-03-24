// March 2021:

//Here I'm connecting to the DB in MySQL via node

//Node.js
var mysql = require('mysql');


var connection = mysql.createConnection({
	host 	: 'localhost',
	user 	: 'root',
	database : 'web_app'	
});

// INSERTING DATA TAKE 2
var person = {emails: 'nuggetini420@gmail.com'};

connection.query('INSERT INTO users SET ?', person, function(err, result) {
	if (error) throw error;
	console.log(result);
	});

connection.end();
