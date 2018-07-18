//var events=require("events")引入模块
// var eventEmitter=new events.EventEmitter();//创建eventEmitter对象
var event=require("events");
var eventEmitter=new event.EventEmitter();
/*eventEmitter.on("some_event",(A,B)=>{
    console.log("触发some_event成功！"+A+"   "+B)
});
eventEmitter.on("some_event",(A,B)=>{
    console.log("nice成功！")
})
setTimeout(function(){
    eventEmitter.emit("some_event","今天很热","说的对")
},5000)
//eventEmitter.emit("some_event","今天很热","说的对")
*/
var listener1=function listener1(){
    console.log("监听1")
}
var listener2=function listener2(){
    console.log("监听2")
}
var listener3=function listener3(){
    console.log("监听3")
}
eventEmitter.addListener("connection",listener1);
eventEmitter.addListener("conncetion",listener3);
eventEmitter.on("conncetion",listener2);
//var count=eventEmitter.listenerCount(eventEmitter,"conncetion");
var count=require('events').EventEmitter.listenerCount(eventEmitter,"conncetion");
console.log(count+"个监听事件!");
eventEmitter.emit("connection");
eventEmitter.removeListener("connection",listener3);
console.log("listener3不在监听");
eventEmitter.emit('connection');
count=require('events').EventEmitter.listenerCount(eventEmitter,"conncetion");
console.log(count+"个监听事件!");


