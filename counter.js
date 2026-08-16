let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")

let count = 0
let totalCount = 0
console.log(saveEl)

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    console.log(count)

    totalCount += count

    countEl.textContent = 0
    count=0
}

function total(){
    totalEl.textContent = "Total entries : " + totalCount
}
