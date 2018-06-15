//arrow fn  不具备this，arguments
// 自己家没有this就找上一级的this

// 如何更改this指向
// 1) call apply bind
// 2) var that = this;
// 3) =>

// 如何确定this是谁  看谁调用的， .前面是谁this就是谁
// function a(b) {
//     return b+1;
// }
// let a = b => b+1;  //去掉function关键字  参数有一个可以省略小括号，小括号和大括号之间有一个箭头   如果返回值没有大括号（但语句）则直接是返回值   如果返回值里面有大括号（多语句）必须写return

// function a(b) {
//     return function (c) {
//         return b+c;
//     };
// }
// a(1)(2);

let a = b => c => b+c;   //高阶函数 （=>俩箭头）
console.log(a(1)(2));


// 闭包：函数执行的一瞬间叫闭包，（不销毁的作用域）,当执行后返回的结果必须是引用数据类型，被外界变量接收，此时这个函数不会销毁 （闭包经常来干模块化的事，以后再说）

let c = function (b) {
    return function (c) {
        return b+c;
    };
}();


// 在vue中，很多时候不能用箭头函数，但是也有用的时候，比如creat钩子函数时为了改变this的指向

