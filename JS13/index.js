let header = document.querySelector('.header');
let buttonTheme = document.querySelector('.btn');

if (localStorage.getItem('header') == 'active') {
header.classList.add('active');
}

buttonTheme.onclick = function() {
header.classList.toggle('active');
if (localStorage.getItem('header') == 'active') {
localStorage.removeItem("header", "active");
} else {
localStorage.setItem("header", "active");
}
};