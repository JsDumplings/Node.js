// var fs=require("fs");
// var data=fs.readFileSync("txt/input.txt");
// console.log(data.toString());
// console.log("程序执行结果！");
var fs=require("fs");
fs.readFile("txt/input.txt",(err,data)=> {
    if(err) console.log(err);
    console.log(data.toString())
})
console.log("程序运行结束！")