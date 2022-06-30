let counter = parseInt(document.getElementById("counter").textContent)
const input =  document.querySelectorAll('button')

function counterPlus() {
    counter++
    return counter
}

document.addEventListener('click', input) {
    if (input = "plus") {
        counterPlus()
    }
}
// setInterval(increment(), 500)

// function increment() {
//     counter = parseInt(counter)
//     return counter++
// }
