//March 2021:

//Node.js
var mysql = require('mysql');


var connection = mysql.createConnection({
	host 	: 'localhost',
	user 	: 'root',
	database : 'web_app'	
});


// SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results); //We can use an ARRAY like results[#] to drill down. 
// });


// INSERTING DATA
// var q = 'INSERT INTO users (emails) VALUES ("cowabunga@aol.com")';

// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results); //We can use an ARRAY like results[#] to drill down. 
// });


// INSERTING DATA TAKE 2
var person = {emails: 'nuggetini420@gmail.com'};

connection.query('INSERT INTO users SET ?', person, function(err, result) {
	if (err) throw err;
	console.log(result);
	});

connection.end();

//user: root
//database: web_app
