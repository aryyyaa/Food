const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 80);
});
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:400});
sr.reveal ('.about-img',{delay:500});
sr.reveal ('.about-text',{delay:300});
sr.reveal ('.middle-text',{delay:300});
sr.reveal ('.row-btn , .shop-content, .contact',{delay:300});


