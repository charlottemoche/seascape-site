document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const contents = document.querySelectorAll('[data-tab-content]');

    function deactivateAllTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('border-b-2', 'border-blue-600', 'text-blue-600', 'font-semibold');
        });
        contents.forEach(content => content.classList.add('hidden'));
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            deactivateAllTabs();
            tab.classList.add('border-b-2', 'border-blue-600', 'text-blue-600', 'font-semibold');
            const targetId = tab.dataset.tabTarget;
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Activate first tab by default
    if (tabs.length) {
        tabs[0].click();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Tab functionality for all buttons (desktop + mobile)
    const tabs = document.querySelectorAll('button[data-tab-target]');
    const contents = document.querySelectorAll('[data-tab-content]');

    function deactivateAllTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('border-b-2', 'border-blue-600', 'text-blue-600', 'font-semibold');
        });
        contents.forEach(content => content.classList.add('hidden'));
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            deactivateAllTabs();
            tab.classList.add('border-b-2', 'border-blue-600', 'text-blue-600', 'font-semibold');

            const targetId = tab.dataset.tabTarget;
            document.getElementById(targetId).classList.remove('hidden');

            // If mobile menu is open, close it after selecting
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Activate first tab by default
    if (tabs.length) {
        tabs[0].click();
    }
});