const pillars = document.querySelectorAll('.pillar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.4
});

pillars.forEach(pillar => {  
    observer.observe(pillar);
});

const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.carousel-arrow.right');
const prevBtn = document.querySelector('.carousel-arrow.left');

let currentSlide = 0;

function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

function nextSlide(){
    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

if(nextBtn && prevBtn && slides.length > 0){
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
}



const dots = document.querySelectorAll('.dot');

function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        
    });
});




/* =========================
   LOGIN E CADASTRO
========================= */

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            themeBtn.textContent = "☀️";
        }else{
            themeBtn.textContent = "🌙";
        }

    });

}

function mostrarLogin(){

    const loginForm = document.getElementById("login-form");
    const cadastroForm = document.getElementById("cadastro-form");

    if(loginForm && cadastroForm){

        loginForm.classList.remove("hidden");
        cadastroForm.classList.add("hidden");

    }
}

function mostrarCadastro(){

    const loginForm = document.getElementById("login-form");
    const cadastroForm = document.getElementById("cadastro-form");

    if(loginForm && cadastroForm){

        cadastroForm.classList.remove("hidden");
        loginForm.classList.add("hidden");

    }
} 
