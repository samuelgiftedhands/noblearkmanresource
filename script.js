document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    var navLinks = navbarCollapse.querySelectorAll('.nav-link');

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    });
});
