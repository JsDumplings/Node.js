/*1.util函数集合
util.inherits(constructor,superConstructor):实现对象间的原型继承；
util.inspect(object,[showHidden],[depth],[colors]):将任意对象转换为字符串，通常用于调试和错误输出。至少接受一个参数object
*/
var util=require("util");
function A(val){
    this.name="A",
    this.type="A类",
    this.age=22,
    this.n=function(){
        console.log("helow")
    },
    this.val=val
};
function a1(a666){
    console.log()
};
util.inherits(a1,A);
var A=new A(8);
console.log(A.name,A.n(),A.val,A.type)
console.log(a1.name,a1.val,a1.type)