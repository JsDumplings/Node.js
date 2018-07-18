
/*
var fs=require("fs");
var data="创建的写入流";
//创建可读流
var readerStream=fs.createReadStream("txt/input.txt");
//设置编码为utf-8
readerStream.setEncoding("UTF8");
//处理流事件 -->data,end,and error
readerStream.on('data',(chunk)=>{
    data+=chunk;
});
readerStream.on('end',()=>{
    console.log(data)
});
readerStream.on('error',(err)=>{
    console.log(err.stack)
});
console.log("程序执行完毕！");


//写入流
var writerStream=fs.createWriteStream("txt/output.txt");//创建写入流
writerStream.write(data,'UTF8');
writerStream.end();
//处理流事件 -->data,end,and error
writerStream.on('finish',()=>{
    console.log("写入完成");
});
writerStream.on('error',(err)=>{
    console.log(err.stack)
});
console.log("程序执行完毕！");
*/
/*
//管道流
var readerStream=fs.createReadStream("txt/input.txt");
readerStream.setEncoding("UTF8");
var writerStream=fs.createWriteStream("txt/output.txt");//创建写入流
readerStream.pipe(writerStream);
*/
//链式流
var fs=require("fs");
var zlib=require("zlib");
fs.createReadStream("txt/ipt.txt.gz")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('txt/ipt.txt'));
  console.log("文件解压完成");
