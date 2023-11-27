// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);


let dontHate = document.querySelector('#dontmessage')
const haters = ["No worries, I get it.","Okay, okay, okay. 2x is fine.","Wow, really?? A third click now?","Beginning to think you are just toying around here.","You have reached your max for clicks on this button!!", "This message will self-destruct in 5, 4, 3, 2, 1....1....1....5, 4..."]
let currentIndex = 0
dontHate.addEventListener('click', () =>{
    alert(haters[currentIndex])
    currentIndex = (currentIndex + 1) % haters.length
})
