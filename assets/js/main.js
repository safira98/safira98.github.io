// Membuat Menu Show
const showMenu = (toggleId, navId) =>{
    const toggle =  document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
// agar toggle bisa di geser saat di klik
showMenu('nav_toggle','nav-menu')

// agar toggle yang Active bisa ke hapus dan di ganti ke fitur lain 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Hapus menu mobile
    const navMenu =  document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL visi*/
sr.reveal('.visi__img',{}); 
sr.reveal('.visi__subtitle',{delay: 400}); 
sr.reveal('.visi__text',{delay: 400}); 

/*SCROLL fasilitas*/
sr.reveal('.fasilitas__subtitle',{}); 
sr.reveal('.fasilitas__text',{}); 
sr.reveal('.fasilitas__data',{interval: 200}); 
sr.reveal('.fasilitas__img',{delay: 600});

/*SCROLL gallery*/
sr.reveal('.gallery__img',{interval: 200}); 

/*SCROLL daftar*/
sr.reveal('.daftar__input',{interval: 200}); 
