const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = gallery[currentIndex].src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showNext() {
    currentIndex = (currentIndex + 1) % gallery.length;
    lightboxImage.src = gallery[currentIndex].src;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    lightboxImage.src = gallery[currentIndex].src;
}

gallery.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
