document.querySelector('.cross').addEventListener('click', function() {
    document.querySelector(".mobile-nav").style.display="none";

})
document.querySelector('.hamburger button').addEventListener('click', function() {
    document.querySelector(".mobile-nav").style.display="flex";

})
document.querySelectorAll('.mobile-nav .nav-link').forEach(elem => {
    elem.addEventListener('click', function() {
        document.querySelector(".mobile-nav").style.display="none";
    
    })
})
