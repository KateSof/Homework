const imgs = document.querySelectorAll(".image-to-show")
const btn = document.getElementById('btn')

btn.addEventListener('click',pushButton)
function pushButton(){
    for (i = 0; i < imgs.length; i++) {
        imgs[i].className = imgs[i].className.toggle('active');
      }
}