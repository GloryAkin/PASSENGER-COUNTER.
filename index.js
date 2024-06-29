let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement(){
   if (count > 0) {
        count-= 1
        countEl.textContent = count
   }
}
function reset(){
    countEl.textContent = 0
    // make save 0 while not disturbing the previous entries
    saveEl.textContent = "Previous entries: " + 0
    count = 0
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
