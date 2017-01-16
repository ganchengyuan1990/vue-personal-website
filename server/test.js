const http = require('http');

const hostname = '127.0.0.1';
const port = 9001;

http.createServer((req, res) => {
  var json; 
  debugger

  var _callbackName = req.url.substr(req.url.indexOf('=') + 1);

  http.get('http://www.weather.com.cn/data/cityinfo/101020100.html', (response) => {  
    response.setEncoding('utf8');  
    response.on('data', (data) => {  
      debugger
     // json = data;  
      res.end(_callbackName + "(" + data + ")");
    });  

  });  
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});