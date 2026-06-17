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





   