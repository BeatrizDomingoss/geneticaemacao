const mobileMenu = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');
const homeSection = document.querySelector('.home-section');

mobileMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        homeSection.classList.add('blur');
    } else {
        homeSection.classList.remove('blur');
    }
});
