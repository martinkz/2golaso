Array.prototype.forEach.call(document.querySelectorAll("[data-a11y-toggle]"), function (item) {
    item.addEventListener('click', function(e){
        e.preventDefault();
        this.querySelector('.expand-icon').classList.toggle('expanded');
        // setTimeout(function(el){
        //     el.querySelector('h2').scrollIntoView({behavior: "smooth"});
        // }, 280, this);
    });
});

var hamburger = document.querySelector('#js-hamburger');
var modal = document.querySelector('.modal');
var logo = document.querySelector('.main-logo-fluid');
var menuOpen = false;

hamburger.addEventListener('click', function(){
    this.classList.toggle('hamburger--open');
    modal.classList.toggle('modal--visible');
    if (!menuOpen) {
        this.setAttribute('aria-label', 'Close Menu');
        this.setAttribute('aria-expanded', 'true');
        if(logo) logo.style.filter = 'invert(1)';
        menuOpen = true;
    } else {
        menuOpen = false;
        if(logo) logo.style.filter = 'invert(0)';
    }
});
