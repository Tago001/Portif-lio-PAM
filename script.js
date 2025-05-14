document.addEventListener('DOMContentLoaded', function () {
    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const hash = window.location.hash || '#home';

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });

        // If no hash, show home by default
        if (!window.location.hash) {
            document.querySelector('#home').style.display = 'block';
        }
    }

    // Set initial active state
    setActiveLink();

    // Update active state on hash change
    window.addEventListener('hashchange', setActiveLink);

    // Mobile sidebar toggle
    const showSidebarBtn = document.querySelector('.show-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');

    if (showSidebarBtn) {
        showSidebarBtn.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
            main.classList.toggle('collapsed');
        });
    }

    // Auto-collapse sidebar on small screens
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
            main.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
            main.classList.remove('collapsed');
        }
    }

    // Check on page load and resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});