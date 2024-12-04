let num = document.getElementById('num')
let guess = document.getElementById('guess')
let go = document.getElementById('go')
let win = document.getElementById('win')
let score =  document.getElementById('score')
let container = document.querySelector('.container') // حدد العنصر الذي سيهتز
let winx = 0
let scorex = 20

let start = () => {
    num.value = Math.floor(Math.random() * 21);
    guess.value = "";
    num.innerHTML = "??";
    go.addEventListener('click', () => {
if(guess.value < 0 || guess.value > 20){
    alert("Please enter a number between 0 and 20.")
    return;
}
        else if (num.value == guess.value) {
            console.log("=")
            start();
            winx++;
            win.innerHTML = winx;

            // إطلاق تأثير confetti عند الفوز
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { x: 0.5, y: 0.4 },
                colors: ['#ff0', '#f0f', '#0ff']
            });

        } else if (num.value > guess.value || num.value < guess.value) {
            num.innerHTML = num.value > guess.value ? "more than this" : "less than this";
            scorex--;
            score.innerHTML = scorex;

            // إضافة تأثير الاهتزاز عند الخطأ
            container.classList.add('shake');
            setTimeout(() => {
                container.classList.remove('shake');
            }, 500);

            console.log(num.value);
        }
    });
}

start();
