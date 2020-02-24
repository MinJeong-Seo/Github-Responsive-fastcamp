(function (window, document) {
    'use strict';

    //요소를 담고있는 경우 $
    const $toggles = document.querySelectorAll('.toggle'); //NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    // 사용자가 만들어내는 클릭 이벤트를 감지
    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    //resize가 발생할 때
    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024){
            // Off Toggle element
            offElements();
        }
    });

    function toggleElements(){
        //빈 리스트를 만들어서 반복
        //유사리스트인 $toggles를 반복시키면서 함수를 실행
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
            //toggle이라는 class를 가진 선택자에 on이라는 클래스를 토글
            //on이라는 클래스가 있으면 지우고, 없으면 on을 추가
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }
})(window,document)
// 즉시실행함수