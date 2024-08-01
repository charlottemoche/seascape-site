document.addEventListener('DOMContentLoaded', function () {
    function setupPopup(thumbnailId, popupId) {
        const thumbnail = document.getElementById(thumbnailId)
        const popup = document.getElementById(popupId)

        function showPopup() {
            popup.classList.remove('hidden')
            setTimeout(() => {
                popup.classList.remove('opacity-0')
                popup.classList.add('opacity-100')
            }, 50)
        }

        function hidePopup() {
            popup.classList.remove('opacity-100')
            popup.classList.add('opacity-0')
            setTimeout(() => {
                popup.classList.add('hidden')
            }, 300)
        }

        // Show popup on click for mobile
        thumbnail.addEventListener('click', function (event) {
            showPopup()
        })

        // Hide popup on click outside
        popup.addEventListener('click', function (event) {
            if (event.target === popup) {
                hidePopup()
            }
        })
    }

    setupPopup('thumbnail', 'popup');
    setupPopup('prelude-icon', 'video-popup');

    // function slowScrollTo(element) {
    //     const targetPosition = element.offsetTop
    //     const startPosition = window.scrollY
    //     const distance = targetPosition - startPosition - 60
    //     const duration = 1800
    //     let startTime = null

    //     function animation(currentTime) {
    //         if (startTime === null) startTime = currentTime
    //         const timeElapsed = currentTime - startTime
    //         const run = ease(timeElapsed, startPosition, distance, duration)
    //         window.scrollTo(0, run)
    //         if (timeElapsed < duration) requestAnimationFrame(animation)
    //     }

    //     function ease(t, b, c, d) {
    //         t /= d / 2
    //         if (t < 1) return c / 2 * t * t + b
    //         t--
    //         return -c / 2 * (t * (t - 2) - 1) + b
    //     }

    //     requestAnimationFrame(animation)
    // }

    const body = document.body
    const toggle = document.getElementById('toggle-theme')

    const setTheme = (theme) => {
        body.classList.remove('light', 'dark')
        body.classList.add(theme)
        localStorage.setItem('theme', theme)
    }

    const toggleTheme = () => {
        const currentTheme = body.classList.contains('light') ? 'light' : 'dark'
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    toggle.addEventListener('click', toggleTheme)

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
        setTheme('dark')
    }

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        setTheme(savedTheme)
    }

    // const mobileMenuOpen = document.querySelector('#mobile-menu-open')
    // const mobileMenuClose = document.querySelector('#mobile-menu-close')
    // const navItems = document.querySelector('#nav-items')
    // const navMenuOverlay = document.querySelector('#nav-menu-overlay')
    // const navLinks = document.querySelectorAll('.nav-link')

    // const openMenu = () => {
    //     navItems.classList.remove('hidden')
    //     mobileMenuOpen.classList.add('hidden')
    //     mobileMenuClose.classList.remove('hidden')
    //     navMenuOverlay.classList.remove('hidden')
    // }

    // const closeMenu = () => {
    //     navItems.classList.add('hidden')
    //     mobileMenuOpen.classList.remove('hidden')
    //     mobileMenuClose.classList.add('hidden')
    //     navMenuOverlay.classList.add('hidden')
    // }

    // mobileMenuOpen.addEventListener('click', openMenu)
    // mobileMenuClose.addEventListener('click', closeMenu)
    // navMenuOverlay.addEventListener('click', closeMenu)

    // navLinks.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault()
    //         const targetId = event.target.getAttribute('href').replace('#', '')
    //         const target = document.getElementById(targetId)

    //         closeMenu()

    //         slowScrollTo(target)
    //     })
    // })

    // const sections = document.querySelectorAll('.section')

    // sections.forEach(section => {
    //     const isAboutSection = section.id === 'about'
    //     const appearOnScrollOptions = {
    //         threshold: isAboutSection ? 0.1 : 0.2
    //     }

    //     const appearOnScrollObserver = new IntersectionObserver((entries, observer) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('appear')
    //                 observer.unobserve(entry.target)
    //             }
    //         })
    //     }, appearOnScrollOptions)

    //     appearOnScrollObserver.observe(section)
    // })
})
