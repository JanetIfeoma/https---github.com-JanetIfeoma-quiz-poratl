document.addEventListener('DOMContentLoaded', function () {
    const optionsIcons = document.querySelectorAll('.options-icon');

    optionsIcons.forEach(icon => {
        icon.addEventListener('click', function (e) {
            const optionsMenu = this.parentNode.querySelector('.options-menu');
            toggleOptionsMenu(optionsMenu);
        });
    });

    // Close options menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.active')) {
            document.querySelectorAll('.options-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});

function toggleOptionsMenu(menu) {
    const allMenus = document.querySelectorAll('.options-menu');
    allMenus.forEach(m => {
        if (m !== menu) {
            m.style.display = 'none';
        }
    });

    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

