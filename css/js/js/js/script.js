const boxes = document.querySelectorAll(".box")

boxes.forEach(box=>{
box.addEventListener("mouseover",()=>{
box.style.background="#e0e7ff"
})

box.addEventListener("mouseout",()=>{
box.style.background="white"
})

})
