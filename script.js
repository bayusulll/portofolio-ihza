function scrollToSection(id){
document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});
}

const cards =
document.querySelectorAll(".card");

window.addEventListener("scroll", ()=>{

cards.forEach(card=>{

let position =
card.getBoundingClientRect().top;

let screen =
window.innerHeight;

if(position < screen - 100){

card.style.opacity = 1;
card.style.transform =
"translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity = 0;
card.style.transform =
"translateY(50px)";
card.style.transition =
"all 0.8s ease";

});
