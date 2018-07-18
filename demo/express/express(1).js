var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("Hellow Express 主页get请求")
});
app.post('/',(req,res)=>{
    res.send("Hellow  主页post请求")
})
app.get('/path1',(req,res)=>{
    res.send("Hellow  path1页面get请求")
})
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
 })
var server=app.listen(9998,function(){
    var host=server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})