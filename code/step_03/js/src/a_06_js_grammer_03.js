'use strict';
//a_06_js_grammer_03.js

let a = 1;
let b = a;
console.log(a,b); // 1,1

a = 3;
console.log(a,b); // 3,1

//------------------------

let arr = [1,3,5];
let arr2 = arr;
console.log(arr,arr2);

arr = [5,9,4];
console.log(arr,arr2);

const brr = [2,5,7];
const brr2 = brr;
console.log(brr,brr2);
brr[0]=9;
brr[1]=4;
brr[5]=0;
console.log(brr,brr2);

let obj = {apple : 'red'};
let obj2 = obj;
console.log(obj,obj2); 

obj = {banana : 'yellow'};
console.log(obj,obj2);

const pbj = {grape : 'purple'};
const pbj2 = pbj;
console.log(pbj,pbj2);

pbj.grape = 'green';
pbj.banana = 'yellow';
pbj.orange = 'orange';
console.log(pbj,pbj2);

//참조변수----------------------
console.clear();

let c = 5;
let d = c;
console.log(c,d);

const objGroup = [5,7,3];
const objG2 = objGroup;
console.log(objGroup,objG2);

  objGroup[3] = 5;
  console.log(objGroup,objG2);

const objCopy = [];

for(let i = 0; i < objGroup.length; i += 1){
 objCopy[i] = objGroup[i];
}
console.log(objCopy);
objGroup[3] = 12;
objGroup[2] = 1;
console.log(objGroup,objCopy);

const copyG = [...objGroup];
objGroup[2] = 100;
console.log(objGroup,copyG);

//----------------------------
console.clear();

const coffeeMenu = ['americano', 'cafe' , 'cafe latte', 'cafe mocha', 'esspresso', 'apogato', 'mlcha latte'];

let coffeeLen = coffeeMenu.length;
for(let i = 0; i < coffeeLen; i+=1){
  console.log('menu:', coffeeMenu[i]);
};

// for(let menu in coffeeMenu){
//   console.log(coffeeMenu[menu], menu);
// }
//매개변수 : 실제 사용하는 기능을 변수로 임시매개체가 되는 형태.
//인수 :  던져주는곳 , 인자 : 받아서 사용하는 곳
coffeeMenu.forEach(function(data, index){
console.log( data , index);
});

//-------for in----배열이아니라 객체일때 포인--------------------
console.clear();

const maker = {
  'nike'    : 'shoose',
  'apple'   : 'phone',
  'samsung' : 'laptop',
}
 for(let title in maker){
   console.log(maker[title]);
 }//객체를 뽑아내기위한 반복 순환