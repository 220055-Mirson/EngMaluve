
function enviar_whats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '258873032005'

    const texto = `Ola! Sou ${nome}, ${mensagem}`
    const msg_formatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msg_formatada}`

    console.log(url)
    window.open(url, '_blank');
}