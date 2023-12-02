document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuContent = document.getElementById('menu-content');

    menuButton.addEventListener('click', function () {
        menuContent.classList.toggle('show-menu');
    });
});