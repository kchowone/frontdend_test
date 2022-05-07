'use strict';
// a_09_js_method.js

(function(){
  let arr = [1,4,5];
  arr[3] = 10 ;
  
  arr.push('apple','kiwi');// push: 채워넣겠다
  arr.push('banana');

  arr.pop();// 터뜨리겠다 하나씩만 없어짐.
  arr.pop();
  
  arr.shift(); // 앞 사라지게
  arr.unshift(7); // 앞 추가
  console.log( arr );
  
  // console.log( arr.length );
  // arr.forEach(function(d,i){ console.log( i, d)});
  arr.splice(1,3);
  
  console.log( arr );

  const arr2 = [...arr]; //deep copy

  let addr = '서울시 마포구 연남동';
  const arrAdd = addr.split(' ');
  console.log(arrAdd);

  let num = '010-4070-8158';
  const arrnum = num.split('-');
  console.log(arrnum);
  let joinNum = arrnum.join('.');
  console.log(joinNum);

})();
