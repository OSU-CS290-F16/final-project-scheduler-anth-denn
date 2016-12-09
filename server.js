/*
 * Here, you should 	write a simple server to serve files statically.
 */

var path = require('path');
var mysql = require('mysql');

var staticDir = path.join(__dirname, 'public');
var indexFilename = 'indexschedule.html';
var notFoundFilename = '404.html';
var port = process.env.PORT || 3000;

var http = require("http");
var fs = require('fs');

/*var mysqlHost = "oniddb.cws.oregonstate.edu";
var mysqlUser = "liestyoa-db";
var mysqlPassword = "f40SXm08SUJiEhp9";
var mysqlDB = "liestyoa-db";
var mysqlConnection = mysql.createConnection({
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDB
});

mysqlConnection.connect(function(err) {
    if(err) {
        console.log("== unable to make connections to MYSQL database")
        //throw err;
    }
});
*/
var index;
fs.readFile('public/indexschedule.html', function(err, data) {
    if (err){
        throw err;
    }
    index = data;
});

var style
fs.readFile('style.css', function(err, data) {
        if(err){
            throw err;
        }
    style = data;
})

var week1;
fs.readFile('public/JanWeek1.html', function(err, data) {
    
    if (err){
        throw err;
    }

/*    mysqlConnection.query("SElECT * FROM week1", function(err, rows){
    if(err) {
        console.log("== Error fetching people from database:", err);
        console.log("Error fetching people from database: " + err);
    }
    else {
        global.globaldata = rows;
        //mysqlConnection.end();
    }
    }); 
    */
    week1 = data;
});

var week2;
fs.readFile('public/JanWeek2.html', function(err, data) {
    if (err){
        throw err;
    }
    week2 = data;
});

var week3;
fs.readFile('public/JanWeek3.html', function(err, data) {
    if (err){
        throw err;
    }
    week3 = data;
});

var week4;
fs.readFile('public/JanWeek4.html', function(err, data) {
    if (err){
        throw err;
    }
    week4 = data;
});

var week5;
fs.readFile('public/JanWeek5.html', function(err, data) {
    if (err){
        throw err;
    }
    week5 = data;
});

var js1;
fs.readFile('public/J,week1.js', function(err, data) {
    if (err){
        throw err;
    }
    js1 = data;
});

var indexjs;
fs.readFile('public/index.js', function(err, data) {
    if (err){
        throw err;
    }
    indexjs = data;
});
var four_oh_four;
fs.readFile('public/404.html', function(err, data) {
    if (err){
        throw err;
    }
    four_oh_four = data;
});

var server = http.createServer(function (request, resp) {
	//response.statusCode = 200;
	//response.setHeader("Content-Type", "text/html");
	///response.end();

	switch(request.url) {
        case "/index.js":
            resp.writeHead(200, {"Content-Type": "text/javascript", "Cache-Control": "public"});
			resp.write(indexjs);
			resp.end();
			break;
        case "/J,week1.js":
            resp.writeHead(200, {"Content-Type": "text/javascript", "Cache-Control": "public"});
			resp.write(js1);
			resp.end();
			break;
        case "/style.css":
			resp.writeHead(200, {"Content-Type": "text/css", "Cache-Control": "public"});
			resp.write(style);
			resp.end();
			break;
            
         case "/":
			resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
			resp.write(index);
			resp.end();
			break;
		case "/indexschedule.html":
			resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
			resp.write(index);
			resp.end();
			break;

        case "/index.html": 
            resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
            resp.write(index);
            resp.end();
            break;

        case "/JanWeek1.html":
            resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
            resp.write(week1);
            resp.end();
            break;

        case "/JanWeek2.html":
            resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
            resp.write(week2);
            resp.end();
            break;

        case "/JanWeek3.html":
            resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
            resp.write(week3);
            resp.end();
            break;

        case "/JanWeek4.html":
            resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
            resp.write(week4);
            resp.end();
            break;

        case "/JanWeek5.html":
            resp.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "public"});
            resp.write(week5);
            resp.end();
            break;

		default:
			resp.writeHead(404, {"Content-Type": "text/html", "Cache-Control": "public"});
			resp.write(four_oh_four);
			resp.end();

	}
	//resp.end();
});

server.listen(port);