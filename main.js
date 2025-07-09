const typingText =  document.querySelector('.typing-text') // 출력할 위치
const blink =  document.querySelector('.blink') // 커서

const content = "Hi, I'm Minseo. \n Full-Stack Developer"; // 출력 내용
let i = 0;

function typing() {
    setInterval(() => {
        if(i < content.length){
            const char = content[i++];
            typingText.innerHTML += char === "\n" ? "<br/>" : char;
            //setTimeout(typing, 100);
        }
        else{
            blink.classList.add('blink-animate');
        }
    }, 100)
}
window.addEventListener('load', typing)
// setInterval(typing, 100);
