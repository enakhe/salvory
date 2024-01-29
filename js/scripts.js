document.addEventListener('DOMContentLoaded', function() {
    showMenu()
    hideMenu()
    carousel()
})

function showMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.addEventListener('click', function() {

        const closeIcon = document.getElementById('close-icon');
        closeIcon.style.opacity = '1';

        sideMenu.style.opacity = '0';

        const sideMenuDropdown = document.getElementById('side-menu-dropdown');
        sideMenuDropdown.style.height = '240px';
        sideMenuDropdown.style.opacity = '1';
        sideMenuDropdown.style.transition = 'all 1s';
    })
}

function hideMenu() {
    const closeIcon = document.getElementById('close-icon');
    closeIcon.addEventListener('click', function () {

        const sideMenu = document.getElementById('side-menu');
        sideMenu.style.opacity = '1';

        closeIcon.style.opacity = '0';

        const sideMenuDropdown = document.getElementById('side-menu-dropdown');
        sideMenuDropdown.style.height = '0';
        sideMenuDropdown.style.opacity = '0';
        sideMenuDropdown.style.transition = 'all 1s';
    })
}

function carousel() {
    const carouselItem = document.querySelectorAll('.carousel-item');
    for(let i = 0; i < carouselItem.length; i++) {
        carouselItem[0].classList = 'carousel-item animate__animated animate__fadeInLeft'
    }
}

