document.addEventListener('DOMContentLoaded', () => {

    const thumbnail = document.getElementById('thumbnail')
    const popup = document.getElementById('popup')

    if (thumbnail) {
        if (window.innerWidth <= 768) {
            thumbnail.addEventListener('click', function () {
                popup.classList.remove('hidden')
            })
        } else {
            thumbnail.style.pointerEvents = 'none'
        }
    }

    if (popup) {
        popup.addEventListener('click', function () {
            popup.classList.add('hidden')
        })
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            thumbnail.addEventListener('click', function () {
                popup.classList.remove('hidden')
            })
        } else {
            thumbnail.style.pointerEvents = 'none'
        }
    })

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
