'use strict';
// a_12_js_async1.js

let num = 0;
let timed = 1000
// 5초 뒤에 num이라는 변수에 10을 더하기
setTimeout(()=>{
  num += 10;
console.log('timeput:', num += 10);
},timed*5);

//1초마다 num변수에 3씩 더하겠다
let setI = setInterval(()=>{
  console.log('interval:', num += 3);
  if(num >= 40){
    clearInterval(setI);
  }
},timed);


num += 1;
console.log(num);

num += 2;
console.log(num);

num += 3;
console.log(num);

num += 4;
console.log(num);

//외부 문서를 불러온다!
//js에서 필요한 문서를 중간에 호출하여 사용!
//html 문서가 비어있다, 이곳에 필요한 코드를 생성하여 넣는다.

//ES5 :new XMLHttpRequest() -> open -> send
//ES6 : fetch(),promise(), async/await -> IE에서는 그냥 안됨, axios()

let sample;
fetch('../js/data/MOCK_DATA.json')
.then( (response) => {return response.json()})
.then( (data) => {
 const user1 = data.filter(function(arr, idx){
    return arr.first_name === 'Annetta';
  });
return user1;
})
.then((data) => {
  sample = data;
  console.log(data);})

  setTimeout(function(){
    console.log('sample:', sample);
  },timed*5);

// fetch('../js/data/MOCK_DATA.json')
// .then( (response) => {return response.json()})
// .then( data => data.filter(arr => arr.id === 2 ) )
// .then(console.log);