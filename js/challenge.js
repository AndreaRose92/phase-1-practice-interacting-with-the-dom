const minus =  document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const submit = document.getElementById('submit')


timer = function() {
    return setInterval(function(){
        var a = document.getElementById('counter')
        b = parseInt(a.innerText)
        a.innerText = b+1
    }, 500)
}
interval = timer()

plus.addEventListener('click', function() {
    var a = document.getElementById('counter')
    b = parseInt(a.innerText)
    a.innerText = b+1
})

minus.addEventListener('click', function() {
    var a = document.getElementById('counter')
    b = parseInt(a.innerText)
    a.innerText = b-1
})




heart.addEventListener('click', function(){})
pause.addEventListener('click', function(){})
submit.addEventListener('click', function(){})