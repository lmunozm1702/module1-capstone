function closeMobileMenu(mobileNavDiv, topNavbar, bottomNavbar, bottomNavList) {
  mobileNavDiv.classList.remove('hidden');
  topNavbar.classList.replace('container-fluid', 'hidden');
  topNavbar.classList.remove('py-3');
  bottomNavbar.classList.add('hidden');
  bottomNavList.classList.remove('flex-column');
  bottomNavList.classList.remove('align-items-center');
}

function displayMobileMenu() {
  const mobileNavDiv = document.querySelector('#navbar-hamburguer');
  mobileNavDiv.classList.add('hidden');

  const topNavbar = document.querySelector('#top-navbar');
  topNavbar.classList.replace('hidden', 'container-fluid');
  topNavbar.classList.add('py-3');

  const bottomNavbar = document.querySelector('#bottom-navbar');
  bottomNavbar.classList.remove('hidden');

  const bottomNavList = document.querySelector('#bottom-navbar-list');
  bottomNavList.classList.add('flex-column');
  bottomNavList.classList.add('align-items-center');

  const navClose = document.querySelector('#nav-close');
  navClose.addEventListener('click', () => {
    closeMobileMenu(mobileNavDiv, topNavbar, bottomNavbar, bottomNavList);
  });
}

const mobileNav = document.querySelector('#hamburguer-a');
mobileNav.addEventListener('click', () => {
  displayMobileMenu();
});
