// b_02_js_showHide.js
'use strict';  

const jsArea = document.querySelector('.js_area');
//show, hide
(function(){
const jsBtn01 = jsArea.querySelector('.btn_01');
const Btn01Dt = jsBtn01.querySelector('dt');
// const Btn01Dd = jsBtn01.querySelector('dd');
const Btn01Dd = Btn01Dt.nextElementSibling;
// const Btn01Dd = Btn01Dt.Sibling;
// console.log(Btn01Dd);

// event
// 1. Btn01Dt를 이벤트처리(클릭)시, Btn01Dd를 나타나게 만들기.

Btn01Dt.addEventListener('click',function(event){
  event.preventDefault();
  const ddDiplay = window.getComputedStyle(Btn01Dd).display === 'none';

  if(ddDiplay){
    Btn01Dd.style = 'display : block';
  }else{
    Btn01Dd.removeAttribute('style');
    // Btn01Dd.style = 'display : none';
  }

});
})();

// =========================================================
//  fadeIn, fadeOut
(function(){
  // BtnDt를 이벤트발생(클릭)시, dd를 부드럽게 fade처리로 나타나게/사라지게 만들기.

  //변수 영역  -------------------------------------
  const jsBtn = jsArea.querySelector('.btn_02');
  const BtnDt = jsBtn.querySelector('dt'); 
  const BtnDd = jsBtn.querySelector('dd');
  let   opacityValue = 0;
  let   timed = 100;
  let   PERMISSION = true ;

  //이벤트 영역 -------------------------------------
  BtnDt.addEventListener('click',function(event){
    event.preventDefault();
    if(PERMISSION){
      PERMISSION = false;
   
    const DdDisplay = window.getComputedStyle(BtnDd).display === 'none';
    if(DdDisplay){
      BtnDd.style.display = 'block';
      BtnDd.style.opacity = opacityValue / 100;
      let runningInterval = setInterval(function(){
        if (opacityValue < 100){
          opacityValue += 1;
          BtnDd.style.opacity = opacityValue / 100;
        }else{
          clearInterval(runningInterval);
          PERMISSION = true;
        }
      },timed/50)
      
    }else{
   

      let runningInterval = setInterval(function(){
        if(opacityValue > 0){
          opacityValue -= 1;
          BtnDd.style.opacity = opacityValue / 100;
        }else{
          clearInterval(runningInterval);
          opacityValue = 0;
          BtnDd.removeAttribute('style');
          PERMISSION = true;
        }
      }, timed / 50);
    }
  } // if(PERMISSION)
  }); // BtnDt.addEventListener('click')
})();

// =========================================================
// slideDown, slideUp
(function(){
  //변수 영역  -------------------------------------
  const jsBtn = jsArea.querySelector('.btn_03');
  const BtnDt = jsBtn.querySelector('dt'); 
  const BtnDd = jsBtn.querySelector('dd');
  // const ddFinalHeight = 200;
  let   timed = 100;
  let   PERMISSION = true ;
  let   ddHeight = 0;
  let   runningInterval;
  
  // 함수영역 --------------------------------------------

const fnCheck = function(){
  PERMISSION = false ;
  return getComputedStyle(BtnDd).display === 'none';
};


  // BtnDd 나타날경우
  const fnBlockDd = function(){
    BtnDd.style.display = 'block';
    BtnDd.style.height = ddHeight + 'px';
    BtnDd.style.overflow = 'hidden';
  };

  const fnSlideDown = function(){
    runningInterval = setInterval(() =>{
              
      if(ddFinalHeight > ddHeight ){
        ddHeight += 1;
        BtnDd.style.height = ddHeight + 'px';
      }else{
        ddHeight = ddFinalHeight;
        clearInterval(runningInterval);
        PERMISSION = true;
      }
    },timed / 100);
  };

  const fnSlideUp = function(){
    runningInterval = setInterval(() => {
      if(ddHeight > 0){
        ddHeight -= 1;
        BtnDd.style.height = ddHeight + 'px';
      }else{
        ddHeight = 0;
        BtnDd.removeAttribute('style');
        clearInterval(runningInterval);
        PERMISSION = true; 
      }
    },timed / 100)

  }

  // 선택자.outerHeight(); -> jQuery에서 높이값 가져오기 기능
    const fnGetHeight = function(){
      BtnDd.style.display = 'block';
      const size = BtnDd.offsetHeight;
      BtnDd.removeAttribute('style');
      return size;
    };



    // 추가 변수 -----------------------------------------------
    const ddFinalHeight = fnGetHeight();


    //이벤트 수행
      // BtnDt를 이벤트발생(클릭)시, dd를 부드럽게 slide처리로 나타나게/사라지게 만들기
    BtnDt.addEventListener('click',function(event){
      event.preventDefault();
       if(PERMISSION){
        const displayEl = fnCheck() ;
          if(displayEl){
            fnBlockDd();
            fnSlideDown();
            
          }else{
            fnSlideUp();
          }
        }// if(PERMISSION)
    });//addEventListener('click')
})();




// =========================================================

  // html문서의 인라인속성값을 가져올때 사용
  // conole.log(Btn01Dd.style.display)


  // css문서에서 작성한 속성값을 가져올때 사용
  //console.log(window.getComputedStyle(Btn01Dd).display);

  const wrap = document.querySelector('#wrap');
//  console.log(wrap.clientHeight);
//  console.log(wrap.offsetHeight);
 // clientHeight : 보더값 제외/ 엘리먼트의 내부 높이를 픽셀로 반환 (소수점 없음.)
 // offsetHeight : 보더값을 포함하면