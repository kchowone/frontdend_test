'use strict';
// a_11_js_method.js

const arr = ['banana','orange', 'graph', 'kiwi', 'strawbrry'];
const arrCopy = [...arr];
arrCopy.sort();
console.log(arr,arrCopy);
arrCopy.reverse();
console.log(arr,arrCopy);
console.clear();

const arrNum = [1,2,3,4,5,6,7,8,9,10,11,15,28,29,35,50];
// arrNum.sort((a,b) => b - a);
arrNum.sort((a,b) => {return b - a});
console.log(arrNum);

// -----------------------------------------------------
const arrNum2 = [1,3,5,8,10,22,53];
let totalNum = 0;
for(let i = 0; i < arrNum2.length; i+=1){
  totalNum += arrNum2[i];
}
console.log(totalNum);

//let totalNum2 = arrNum2.reduce((a,b)=>{ return a + b});
let totalNum2 = arrNum2.reduce((a,b)=> a + b);
console.log(totalNum2)

// --------------------------------------
//filter : filter메소드는 내부함수의 return에서 조건이 참인 경우만 허용.
const filterNum = [];
for(let i=0; i < arrNum2.length; i++){
  if(arrNum2[i] > 5 && arrNum2[i] < 30){
  filterNum.push(arrNum2[i])
  } else{
      continue;
  }
}
console.log(filterNum)

const filterArrNum = arrNum2.filter((data, idx) => {return  5 < data && data < 30});
console.log (filterArrNum);

// --------------------------------------
// map : 배열의 내용을 일괄 수행하는 기능.
const upDateNum = [];
for(let i =0; i < arrNum2.length; i+=1){
  let sampleNum = arrNum2[i]** 2;
  upDateNum.push(sampleNum);
}
arrNum2.forEach((data,index)=>{upDateNum.push(data ** 3)});
console.log(arrNum2,upDateNum);

const setArrNum = arrNum2.map((data, index)=>{return data ** 3;});
console.log(setArrNum);