function changeTheme() {
    const verifyTheme = document.querySelector('body').classList
    
    document.body.classList.toggle('darkTheme')

    if (verifyTheme.contains('darkTheme')) {
        document.getElementById('btnTheme').textContent = "☀️ Modo Claro";
    } else {
        document.getElementById('btnTheme').textContent = "🌙 Modo Escuro";
    }
}