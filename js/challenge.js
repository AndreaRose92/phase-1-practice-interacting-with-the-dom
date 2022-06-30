const minus =  document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const submit = document.getElementById('submit')
let counter = document.getElementById('counter')

timer = function() {
    return setInterval(function(){
        let timerIncrement = parseInt(counter.innerText)
        counter.innerText = timerIncrement+1
    }, 500)
}
interval = timer()

plus.addEventListener('click', function() {
    let counterUp = parseInt(counter.innerText)
    counter.innerText = counterUp+1
})

minus.addEventListener('click', function() {
    let counterDown = parseInt(counter.innerText)
    counter.innerText = counterDown-1
})

heart.addEventListener('click', function(){})
pause.addEventListener('click', function(){})
submit.addEventListener('click', function(){})