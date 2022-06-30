// let counter = parseInt(document.getElementById("counter").textContent)
const minus =  document.getElementById('minus')
const plus = document.getElementById('plus')


// function counterPlus() {
//     let a = document.getElementById('counter')
//     let b = parseInt(a.innerText)
//     a.innerText = b+1
// }

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


// setInterval(increment(), 500)

// function increment() {
//     counter = parseInt(counter)
//     return counter++
// }
