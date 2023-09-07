const options = {
    accessinbility: true,
    prevNextButton: true,
    pageDots: true,
    setGallerySize: false,
    wrapAround: true,
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};

// Functions to set background position for sliders
function setBgPosition(slide, index){
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosition = `${x}px`;
}

// Slides initialization
const carousel = document.querySelector('[carousel');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Event listener using bg position
flkty.on('scroll', () =>{
    flkty.slides.forEach(setBgPosition);
})