document.addEventListener('DOMContentLoaded', function () {
    const body = document.body
    const toggle = document.getElementById('toggle-theme')

    const setTheme = (theme) => {
        body.classList.remove('light', 'dark')
        body.classList.add(theme)
        localStorage.setItem('theme', theme)

        const logoDark = document.getElementById('logo-dark')
        const logoLight = document.getElementById('logo-light')

        if (theme === 'dark') {
            logoDark.classList.remove('hidden')
            logoLight.classList.add('hidden')
        } else {
            logoDark.classList.add('hidden')
            logoLight.classList.remove('hidden')
        }
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
})
