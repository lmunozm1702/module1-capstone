let mobileNav = document.querySelector('#hamburguer-a');
mobileNav.addEventListener('click', (event) => {
    displayMobileMenu();
})

function displayMobileMenu() {
    const mobileNavDiv = document.querySelector('#navbar-hamburguer');
    mobileNavDiv.classList.add('visually-hidden');

    const topNavbar = document.querySelector('#top-navbar');
    topNavbar.classList.replace('visually-hidden', 'container-fluid');
    topNavbar.classList.add('py-3');

    const bottomNavbar = document.querySelector('#bottom-navbar');
    bottomNavbar.classList.remove('visually-hidden');

    const bottomNavList = document.querySelector('#bottom-navbar-list');
    bottomNavList.classList.add('flex-column');
    bottomNavList.classList.add('align-items-center');

    const navClose = document.querySelector("#nav-close");
    navClose.addEventListener('click', (event) => {
        closeMobileMenu(mobileNavDiv, topNavbar, bottomNavbar, bottomNavList);
    });
}

function closeMobileMenu(mobileNavDiv, topNavbar, bottomNavbar, bottomNavList) {
    mobileNavDiv.classList.remove('visually-hidden');
    topNavbar.classList.replace('container-fluid', 'visually-hidden');
    topNavbar.classList.remove('py-3');
    bottomNavbar.classList.add('visually-hidden');
    bottomNavList.classList.remove('flex-column');
    bottomNavList.classList.remove('align-items-center');
}
