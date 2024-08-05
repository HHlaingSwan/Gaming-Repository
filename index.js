let navBar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');


menuBtn.onclick = () => {
    navBar.classList.toggle('active');
    menuBtn.classList.toggle('fa-xmark')
}
window.onscroll = () => {
    navBar.classList.remove('active');
    menuBtn.classList.remove('fa-xmark')
    if (window.scrollY > 0 ){
        header.classList.add('active');
    }else {
        header.classList.remove('active');
    }
}



