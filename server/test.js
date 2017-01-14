/*var http = require("http");
var iconv = require('iconv-lite');
 
var option = {
    hostname: "www.weather.com.cn",
    path: "/data/sk/101190408.html"
};                                                                                                                                                   
 
var req = http.request(option, function(res) {
    res.on("data", function(chunk) {
        console.log(iconv.decode(chunk, "gbk"));
    });
}).on("error", function(e) {
    console.log(e.message);
});
 
req.end();*/


var http = require('http');
var iconv = require('iconv-lite');

/*var option = {
    hostname: "www.weather.com.cn",
    path: "/data/sk/101190408.html"
}; */
// var mysql      = require('mysql');
/*var connection = mysql.createConnection({
    host     : 'rm-bp1w72suk8pc5h6mk.mysql.rds.aliyuncs.com',
    user     : 'r85u40z94p',
    password : 'Mafeng11',
    database: 'r85u40z94p'
});
//开始你的mysql连接
connection.connect();*/
var server = http.createServer(function (req, res) {
    //如果你发一个GET到http://127.0.0.1:9000/test
   var option = {
    hostname: "www.weather.com.cn",
    path: "/data/sk/101190408.html"
	};                                                                                                                                                   
	 
	/*http.get(option, (response) => {
	  console.log(`Got response: ${response}`);
	  // consume response body
	  response.resume();
	}).on('error', (e) => {
	  console.log(`Got error: ${e.message}`);
	});*/


	var req = http.request(option, function(response) {
		
	    response.on("data", function(chunk) {
	        console.log(iconv.decode(chunk, "gbk"));
	    });
	    debugger

	    response.on("end", function (data) {  

		});

	    // return "JSON.stringify(chunk)";

	}).on("error", function(e) {
	    console.log(e.message);
	});
	 
	req.end();
});

server.listen(9000, '127.0.0.1');
//在server关闭的时候也关闭mysql连接
server.on('close',function(){
    console.log('close');
});

console.log('listening on port  9000');