var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const hamburger = document.getElementById("ham");
const x = document.getElementById("navElements");
const box = document.getElementById("container")

hamburger.addEventListener("click",()=>{
   if(x.style.right === "0px"){
        x.style.right = "-100%";
        box.style.filter = "blur(0px)";
        box.style.transform = "scale(1)"
   }else{
        x.style.right = "0px"
        box.style.filter = "blur(5px)";
        box.style.transform = "scale(.98)"
   }
})

btn.addEventListener("click",()=>{
    x.style.right = "-100%"
    box.style.filter = "blur(0px)";
    box.style.transform = "scale(1)"
})