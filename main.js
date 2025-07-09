// typing animation
const typingText =  document.querySelector('.typing-text') // 출력할 위치
const blink =  document.querySelector('.blink') // 커서

const typingTextTop = typingText;

const content = "Hi, I'm Minseo. \n Full-Stack Developer."; // 출력 내용
let i = 0;
let typingStarted = false; // 타이핑 시작했는지 확인
let typingFinished = false; // 타이핑 끝났는지 확인

function typing() {
    if(typingStarted || typingFinished) // 타이핑 시작 전이나 끝나기 전에는 실행 X
        return;
    typingStarted = true;
    const interValid = setInterval(() => {
        if(i < content.length){
            const char = content[i++];
            typingText.innerHTML += char === "\n" ? "<br/>" : char;
        }
        else{
            clearInterval(interValid);
            blink.classList.add('blink-animate');
            typingFinished = true;
        }
    }, 100)
}
window.addEventListener('load', typing) // 페이지 로드되면 실행

window.addEventListener('scroll', () => { // 스크롤 이벤트 설정된 영역 이내에 오면 애니메이션 동작
    if(window.scrollY < 200 && window.scrollY > 0 && typingFinished){
        typingText.innerHTML = "";
        i = 0;
        typingStarted = false;
        typingFinished = false;
        blink.classList.remove('blink-animate');
        typing();
    }    
});


// 버튼 클릭 시 해당 영역의 위치로 스크롤 이동
// 섹션 요소
const sections = [
    document.querySelector('.home-section'),
    document.querySelector('.intro-section'),
    document.querySelector('.project-section')
];

// 헤더 높이
const headerHeight = document.querySelector('.header').offsetHeight; 

// 버튼 요소
const navBtns = document.querySelectorAll('.nav-menu li');


// 클릭 이벤트
navBtns.forEach( (item, index) => {
    // header, footer 각각 3개씩 총 6개 
    // 섹션 배열의 크기는 총 3개이므로 
    // footer를 누르면 undefined를 참조
    const sectionIdx = index % 3;
    item.addEventListener('click', () => {
        let targetTop = sections[sectionIdx].offsetTop;

        if(index != 0)
            targetTop -= headerHeight;

        window.scrollTo({ top: targetTop, behavior: 'smooth'});
    });
});


// 스크롤 내릴 때는 헤더 안 보이고 올릴 때 헤더 보이도록

let prevScrollTop = 0;
window.addEventListener('scroll', (e) => {
    const nextScrollTop = window.scrollY;
    const scrollUp = scrollY < prevScrollTop;
    
});