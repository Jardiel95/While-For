const slides =
document.querySelectorAll('.slide');

const btnPrev =
document.getElementById('btnPrev');

const btnNext =
document.getElementById('btnNext');

const slideCounter =
document.getElementById('slideCounter');

const progressBar =
document.getElementById('progressBar');

let currentSlide = 0;

const totalSlides = slides.length;

function showSlide(index){

    slides.forEach((slide,i)=>{

        slide.classList.remove('active');

        if(i === index){
            slide.classList.add('active');
        }

    });

    currentSlide = index;

    slideCounter.textContent =
    `${currentSlide + 1} / ${totalSlides}`;

    progressBar.style.width =
    `${((currentSlide + 1) / totalSlides) * 100}%`;

}

function nextSlide(){

    if(currentSlide < totalSlides - 1){
        showSlide(currentSlide + 1);
    }

}

function prevSlide(){

    if(currentSlide > 0){
        showSlide(currentSlide - 1);
    }

}

btnNext.addEventListener('click',nextSlide);

btnPrev.addEventListener('click',prevSlide);

document.addEventListener('keydown',(e)=>{

    if(
        e.key === 'ArrowRight' ||
        e.key === ' ' ||
        e.key === 'Enter'
    ){
        e.preventDefault();
        nextSlide();
    }

    if(e.key === 'ArrowLeft'){
        e.preventDefault();
        prevSlide();
    }

});

showSlide(0);