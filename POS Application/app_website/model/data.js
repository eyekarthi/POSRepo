var mysql = require('mysql');
var conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database:'Ripples'
		});
conn.connect(function(err) {
    if (err) throw err;
    console.log("running");
});

module.exports = conn;