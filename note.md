BEM
CSS 작명규칙
- : 일반적인 작명4
__ : ~의 일부분 (container__item)
-- : 상태를 나타냄 (btn--success)

MEDIA QUERY

@media 미디어타입 and (미디어특성){
    CSS 코드
}
@media screen and (max-width: 1200px){
    body{
        color: red;
    }
}

미디어 타입
all 모든 미디어 타입
screen 컴퓨터화면, 태블릿, 스마트폰
print 인쇄 전용

미디어특성
width
max-width 뷰포트 최대 가로 너비(이하)
min-widht 뷰포트 최소 가로 너비
height
max-height
min-height
orientation 뷰포트 방향(portrait: 세로가 긴, landscape:가로가 긴)

Media(Grid) options
기획/디자인 단계에서 결정하는 것이 효과적이다.
large device : desktops : 1024px 이상
medium device: tablets : 1024px 이하
small device : phones : 768px 이하