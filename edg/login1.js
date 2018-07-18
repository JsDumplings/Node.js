var express=require('express');
var app=express();
var bodyParser=require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser=bodyParser.urlencoded({extended:false})

app.post('',urlencodedParser,function(req,res){
    var data={
        "name":req.body.name,
        "pwd":req.body.pwd
    }
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.end(JSON.stringify(data))
})
var server = app.listen(3000, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })