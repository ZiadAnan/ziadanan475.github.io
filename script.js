// Add active state to the navigation menu
var navItems = document.querySelectorAll('.nav-item');

navItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove active class from all items
        navItems.forEach(function(innerItem) {
            innerItem.classList.remove('active');
        });

        // Add active class to the clicked item
        item.classList.add('active');
    });
});
// Add a class to the navigation bar when scrolling
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});