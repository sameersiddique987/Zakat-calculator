// console.log("hello world");



let col1 = document.querySelector(".col1")
let col2 = document.querySelector(".col2")
let col3 = document.querySelector(".col3")
let total =document.querySelector(".total")
function getway() {
    let calculate=`${(col2.value*col3.value)+ +col1.value}`
    console.log(calculate);
    let all=calculate *2.5 /100
    console.log(all);
    total.innerHTML=all
    col1.value=""
    col2.value=""
    col3.value=""
}



































