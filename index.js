const init = () => {
    const el = document.querySelector('.reveal')
    setTimeout(() => {
        el.classList.add('active')
    }, 100);
}

window.onload = init()
