'use strict';
// a_02_after_selector.js

{
  //document.getElementById();
  //document.getElementByClassName()[n];
  //document.getElementsByTagName()[n];
  //selector.children -> .tagName , toLowerCase();
  //selector.parentElement, selector.closest()
  //selector.gqtAttribute('속성명')
}

{
  // document.querySelector('wrap > .box');
  // document.querySelectorAll('.box')[0];
  // slector.childNode
  // selector.parentNode

  const elconPart = document.querySelector('.content_part');
  elconPart.style= `
    width:90%; height:auto;margin-top:2rem; padding:1rem; box-sizing:border-box;
    border:1px solid #ccc; background-color:#fdc`;

  const elConPar = elconPart.querySelectorAll('p');
  // const elConPar = elconPart.getElementsByTagName('p');
  console.log(elConPar);
  let style1 = `width:100%; margin-bottom:0.5rem; border-bottom:1px solid #777;
  background-color:#fff`;
  
  // elConPar[0].style = style1;
  // elConPar[2].style = style1;

  // let elConParLen = elConPar.length;
  //   for(let i = 0; i < elConParLen; i++ ){
  //     elConPar[i].style = style1;
  //   }

  elConPar.forEach((el, idx)=>{
    el.style = style1;
    // console.log(el.childNodes[0]); 
    // console.log(el.parentNode); 
    //차일드 노드 : 다양한 요소를 찾아줌.
    //차일드 : 요소
    // parentNode : 부모의 연결된 요소를 찾아줌.
  });

  // const listCon = Array.prototype.slice.call(elConPar); 
  //[].slice.call();//Array.from()
  // listCon.forEach((el, idx)=>{
  //   el.style = style1;
  // });






}

