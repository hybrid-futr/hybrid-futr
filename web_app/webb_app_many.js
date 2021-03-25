//March 2021:

//Node.js
var mysql = require('mysql');
var	faker = require('faker');

var connection = mysql.createConnection({
	host 	: 'localhost',
	user 	: 'root',
	database : 'web_app'	
});


//INSERTING LOTS OF DATA
var data = [];
for(var i = 0;i < 500; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
}

// console.log(data);

var q = 'INSERT INTO users (emails, created_at) VALUES ?';

connection.query(q, [data], function(err, result) {
	console.log(err);
	console.log(result);
});

connection.end();
