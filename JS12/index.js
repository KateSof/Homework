let showImage;

function showNextImage() {
    showImage = setInterval(
        function(){
    let currentImg = document.querySelector(".image-to-show");
    currentImg.className = "img image-to-hide";
    const newImage = currentImg.nextElementSibling;
    if (newImage) {
        newImage.className = "img image-to-show";
    } else {
        const firstImage = document.querySelector(".img");
        firstImage.className = "img image-to-show";
    }
}, 1000)
}
showNextImage()
// showImage = setInterval(showNextImage,1000)
const stop = document.querySelector('#stop')
const run = document.querySelector('#run')

function stopImage(){
    clearInterval(showImage);
}
stop.addEventListener('click', stopImage)
run.addEventListener('click', countinueContinuing)

function countinueContinuing(){     showNextImage() }
