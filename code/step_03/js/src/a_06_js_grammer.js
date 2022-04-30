'use strict';
// a_06_js_grammer.js

let food = '자장면';

if(food === '자장면'){
  console.log('중국집 전화번호 : 0000');
}else if(food === '피자'){
  console.log('피자집 전화번호 : 1111');
}else if(food === '갈비탕'){
  console.log('갈비탕 전화번호 : 2222');
}else{
  console.log('물 드세요!!!');
}

let result;
switch (food){
  case '자장면' : result = '중국집 전화번호 : 0000'; break;
  case '피자'   : result = '피자집 전화번호 : 1111'; break;
  case '갈비탕' : result = '갈비탕 전화번호 : 2222'; break;
  default : result = '물' ;
}
console.log(result); 

result = '' ;//언급초기화
let bank = 0;
switch (bank){
  case 0 : result += '입금 수행하겠습니다.'; break;
  case 1 : result += '송금 수행하겠습니다.'; break;
  case 2 : result += '계좌 삭제하겠습니다.'; break;
  case 3 : result += '블랙리스트 등극'; break;
  default : result += '누구신지?';
}
console.log(result);

//----------------------------------------------
console.clear();
let link = './content.html';
let linkText = 'js base';
const h1 = document.querySelector('h1');
h1.innerHTML =  '<a href="'+ link + '">'+ linkText +'</a>'
h1.innerHTML =  "<a href=\""+link+"\">" + linkText + "</a>"
h1.innerHTML = `<a  href="${link}">${linkText}</a>`;

//----------------------------------------------
const areaEl = document.querySelector('.area');
const areaUlEl = areaEl.querySelector('ul');
const areaListEl = areaUlEl.querySelectorAll('li');
const relEl = areaEl.querySelector('.result');

areaListEl.forEach(function(it,index ){
  it.addEventListener('click',function(){
    let num = index;
    let product;
    switch(num){
    case 0 : product = '아이스아메리카노'; break;  
    case 1 : product = '슬러시'; break;  
    case 2 : product = '쿠키'; break;  
    case 3 : product = '맥주'; break;  
    default:product = '기부되었습니다.';
  }
  relEl.innerText = product;
  });
})
