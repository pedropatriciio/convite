document.getElementById('sim').addEventListener('click', function() {
    // Defina o número de WhatsApp e a mensagem desejada
    const numeroWhatsApp = '5531992039399'; // Substitua pelo número desejado (incluindo o código do país e DDD)
    const mensagem = encodeURIComponent("Boraa");

    // Crie a URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    // Abra o link em uma nova aba
    window.open(urlWhatsApp, '_blank');
});

document.getElementById('nao').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = 'Erro!';
    message.classList.remove('hidden');
    message.classList.add('error');
});
