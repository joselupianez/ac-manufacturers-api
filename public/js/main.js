document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const textToCopy = btn.parentElement.querySelector('span').innerText
        navigator.clipboard.writeText(textToCopy)
        btn.innerText = "copied"
        setTimeout(function() {
            btn.innerText = "copy"
        }, 1000);
    })
})