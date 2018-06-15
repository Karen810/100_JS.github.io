//配置npm 和语法
// file -> settings
console.log('ok');

let arr = [1,2,3,4,5];
arr.b = '100'; //(私有属性)

for(let i=0; i<arr.length; i++){  //编程式
    console.log(arr[i]);
}

// 面试：forEach、for in、for、for of的区别
//1）forEach 不支持return
arr.forEach(function(item){   //声明式，好处：不关心如何实现。
    console.log('forEach'+item);
});

for(let key in arr){  //key会变成字符串类型，包括数组的私有属性也可以打印出来
    // console.log(typeof key)
    console.log('in'+key)
}

for(let val of arr){ //支持return 并且是只of数组（不能遍历对象）
    console.log('of'+val);
}

let obj = {school:'zfpx', age:8};//Object.keys将对象的key作为新的数组
// ['school','age']
for(let val of Object.keys(obj)){ //支持return 并且是只of数组（不能遍历对象）
    console.log('of_'+obj[val]);
}


//2） filter  是否操作原数组：不  返回结果：过滤后的新数组  回调函数的返回结果：如果返回true 表示这一项放到新数组中     （删除）
let newArr = [1,2,3,4,5].filter(function(item){
    return item>2 && item<5;
});
console.log(newArr);


// 3）map映射   将原有数组映射成一个新数组[1,2,3]<li>1</li><li>2</li><li>3</li>      （更新）
// 不操作原数组   返回新数组  回调函数中返回什么这一项就是什么
let arr1 = [1,2,3].map(function(item){
    // return item*=3;
    return '<li>${item}</li>'  //''是es6中的模板字符串 遇到变量用${}取值
});
console.log(arr1.join(''));


// 4）includes 返回的是布尔类型

let arr3 = [1,2,3,4,5];
console.log(arr3.includes(5));   //


// 5）find 返回的是找到的那一项，不会改变原数组   回调函数中返回true表示找到了，找到之后停止循环；找不到返回的是undefined

// (找到具体的某一项用find)
let result = arr3.find(function(item,index){
    return item.toString().indexOf(5)>-1
});
console.log(result);


// 6）some 找true 找到true后停止 返回true
let arr4 = [1,2,3,4,5];
let resultArr4 = arr4.some(function(item,index){
    return item.toString().indexOf(5)>-1
});
console.log('some_'+resultArr4);


// 7）every 找false 找到false后停止 返回false
let arr5 = [1,2,3,4];
let resultArr5 = arr5.every(function(item,index){
    return item.toString().indexOf(5)>-1
});
console.log('every_'+resultArr5);


// 8) reduce  收敛   4个参数   返回的是叠加(sum)后的结果   原数组不发生变化    回调函数返回的结果：
// prev代表的是数组的第一项，next是数组的第二项
//第二次prev是undefined，next是数组的第三项
let arr6 = [1,2,3,4,5];
let sum = arr6.reduce(function (prev,next,index,item) {
    // console.log(arguments);
    // console.log('reduce_'+prev, next);
    // return 100;     //本次的返回值会作为下一次的prev
    return prev+next;
});
console.log(sum);

// reduce 求和
let arr7 = [{price:30, count:2},{price:30, count:3},{
    price:30, count:2}];
let sum2 = arr7.reduce(function (prev, next) {
    return prev+next.price*next.count;
},0);  //默认制定第一次的prev
console.log(sum2);

let flat = [[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev,next) {
    return prev.concat(next);
});
console.log(flat);











