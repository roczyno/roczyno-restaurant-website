
// navigation toggling

const nav = document.querySelector('.nav');
const navToggler = document.querySelector('.nav-toggler');
const header = document.querySelector('.header');

navToggler.addEventListener('click',toggleNav);

function toggleNav(){
    navToggler.classList.toggle('active')

    nav.classList.toggle('open')
}

//close nav when a nav-item is clicked

document.addEventListener('click', function(e) {
    if(e.target.closest('.nav-item')){
        toggleNav()
    }
})

// sticky nav-header
window.addEventListener('scroll', function(){
    if(this.scrollY > 60) {
        header.classList.add('sticky')
        
    }
    else{
        header.classList.remove('sticky')
    }
})

// menu-tabs section 
const menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e) {
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){
        const target = e.target.getAttribute('data-target');
        menuTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const menuSection = document.querySelector('.menu-section');
        menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
        menuSection.querySelector(target).classList.add('active');
        
        AOS.init();

    }
})


// animation on scroll

window.addEventListener('load', function(){
    // page loader
    document.querySelector('.page-loader').classList.add('fade-out');
    setTimeout(function(){
        document.querySelector('.page-loader').style.display='none';
    },2000)
    // animation on scroll
    AOS.init();
})


