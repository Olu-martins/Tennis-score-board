
const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')

const resetButton = document.querySelector('#reset')

const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

const winningScoreSelect = document.querySelector('#playTo')

let p1Score = 0;
let p2Score = 0;


let winningScore = 0;
let isGameover = false

p1button.addEventListener('click', function () {
    if(!isGameover){
        p1Score += 1;    
    if(p1Score === winningScore){
        isGameover = true;
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        p1button.disabled = true;
        p2button.disabled = true;
}
        p1Display.textContent = p1Score;
}     
})

p2button.addEventListener('click', function () {
    if(!isGameover){
        p2Score += 1;    
    if(p2Score === winningScore){
        isGameover = true;
        p2Display.classList.add('has-text-success');
        p1Display.classList.add('has-text-danger');
        p1button.disabled = true;
        p2button.disabled = true;
}
        p2Display.textContent = p2Score;
}     
})

resetButton.addEventListener('click', reset) 

function reset (){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-danger', 'has-text-success');
    p2Display.classList.remove('has-text-danger', 'has-text-success');    
}

winningScoreSelect.addEventListener('change', function(){
    winningScore =  parseInt(this.value)
    reset();
})











