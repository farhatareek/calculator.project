let btn = document.querySelectorAll(".btn")
let acc =document.querySelector(".accumulater-btn")
let del = document.querySelector(".delete-btn")
let input = document.querySelector(".calc-screen")

function calc() {
btn.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        input.value += e.target.innerHTML
        })
    del.addEventListener("click" ,()=>{
        input.value = ""
    })
    acc.addEventListener("click", ()=>{
        input.value = eval(input.value)
    })
})
}
window.onload = calc()