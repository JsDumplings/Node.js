// var events=require("events");//引入events模块
// var eventEmitter=new events.EventEmitter();//创建eventEmitter对象
// eventEmitter.on("eventName",eventHandler); //绑定事件及事件的处理程序
// eventEmitter.emit("eventName")//触发事件
var events=require("events");
var eventEmitter=new events.EventEmitter();
var connectHandler=function connected(){ //创建事件处理程序
    console.log("连接成功！");
    eventEmitter.emit("data_received")
}
eventEmitter.on("connection",connectHandler);//绑定connection事件处理程序
eventEmitter.on("data_received",function(){
    console.log("数据接收成功！")
})
eventEmitter.emit("connection")
console.log("程序执行完毕！")
