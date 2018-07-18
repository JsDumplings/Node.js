var http=require('http');
var querystring=require('querystring');

http.createServer(function(req,res){
    var post='';//暂存请求体信息

    req.on('data',function(chunk){
        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post+=chunk;
    })

     // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
     req.on('end',function(){
         post=querystring.parse(post);
         res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
         res.write("用户名："+post.name+"    ");
         res.write(";密码："+post.pwd);
         res.end();
     });
}).listen(3000);