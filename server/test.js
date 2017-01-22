const http = require('http');
const mongodb = require('mongodb');

const  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('homepage', server, {safe:true});

const hostname = '127.0.0.1';
const port = 9001;

http.createServer((req, res) => {
  var json; 


  var _callbackName = req.url.substr(req.url.indexOf('=') + 1);

  http.get('http://www.weather.com.cn/data/cityinfo/101020100.html', (response) => {  
    response.setEncoding('utf8');  
    response.on('data', (data) => {  
     // json = data;  
      res.end(_callbackName + "(" + data + ")");

      res._tempData = data;

      db.open( (err, db) =>{
		    if (!err) {
		        console.log('connect db');
		        // 连接Collection（可以认为是mysql的table）
		        // 第1种连接方式
		        // db.collection('mycoll',{safe:true}, function(err, collection){
		        //     if(err){
		        //         console.log(err);
		        //     }
		        // });
		        // 第2种连接方式
		        db.createCollection('test', { safe: true }, (err, collection) => {
		            if (err) {
		                console.log(err);
		            } else {
		                var tmp1 = JSON.parse(res._tempData);
		                collection.insert([tmp1], { safe: true }, function(err, result) {
		                    console.log(result);
		                });
		                /*collection.remove({title: "world"}, function(err, count) {
		                	// console.log(count);
		                })*/
		                collection.find().toArray(function(err, docs) {
		                    console.log('find');
		                    console.log(docs);
		                });

		                db.close();
		                /*collection.findOne(function(err, doc) {
		                    console.log('findOne');
		                    console.log(doc);
		                });*/

		            }

		        });
		    } else {
		        console.log(err);
		    }
	  });

    });  

  });  
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});