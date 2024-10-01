/*=============== SHOW MENU ===============*/
/*const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon');

   })
}

showMenu('nav-toggle','nav-menu')

nav.forEach(function (nav) {
    nav.addEventListener('click', function () {
        if (toggle.classList.contains('show')) {
            $('.nav-menu').collapse('hide');
        }
    })
})*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (!toggle || !nav) {
        console.error(`Elements with IDs "${toggleId}" or "${navId}" not found.`);
        return;
    }

    // Toggle the menu on click
    toggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the event from propagating to the document
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    });

    // Close the menu when any menu item is clicked
    const menuItems = nav.querySelectorAll('a'); // Select all anchor tags or menu items
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        });
    });
}

showMenu('nav-toggle', 'nav-menu');
var typed = new Typed('#hero-titles', {
    strings: [
        'We Build and Foster Organizational Performance.', 
        'Growth Strategies for Business.'],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 100,
    backSpeed: 50,
})