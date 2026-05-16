document.addEventListener("DOMContentLoaded", () => {

const sidebar = document.getElementById("sidebar")
const hamburger = document.querySelector(".hamburger-btn")

window.toggleMenu = function(btn){

if(sidebar){
sidebar.classList.toggle("active")
}

if(btn){
btn.classList.toggle("open")
}

}

const revealItems = document.querySelectorAll(".revealItem")

function revealOnScroll(){

const triggerBottom = window.innerHeight * 0.85

revealItems.forEach(item=>{

const itemTop = item.getBoundingClientRect().top

if(itemTop < triggerBottom){
item.classList.add("activeReveal")
}

})

}

window.addEventListener("scroll", revealOnScroll)

revealOnScroll()

const filterButtons = document.querySelectorAll(".filterBtn")
const itemCards = document.querySelectorAll(".itemCard")

window.filterCategory = function(category){

if(!itemCards.length) return

filterButtons.forEach(btn=>{

btn.classList.remove("active")

const btnText = btn.textContent.trim().toLowerCase()

if(
(category === "all" && btnText === "all") ||
btnText.includes(category.toLowerCase())
){
btn.classList.add("active")
}

})

itemCards.forEach(card=>{

if(category === "all"){
card.style.display = "block"
}
else if(card.classList.contains(category)){
card.style.display = "block"
}
else{
card.style.display = "none"
}

})

}

})