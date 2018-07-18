var express=require('express');
var app=express();
app.get('/',(req,res)=>{
	res.send("server.js")
})
var server=app.listen(3000,()=>{
    var host=server.address().address;
    var port=server.address().port;
    console.log("访问的地址为：http://"+host+":"+port)
})