function possibilidadesUsuario(item) {
    const alert = document.querySelector('.alert');
    const textModal = document.querySelector('.textModal');

    switch (item) {
        case 'music': ;
            textModal.innerHTML = `Tocando na Alexa`
            break;
        case 'ar':

            textModal.innerHTML = `Ar-condicionado ligado`
            break;

        case 'tv':

            textModal.innerHTML = `TV ligada`
            break;
        case 'coffee':

            textModal.innerHTML = `Cafeteira ligada`
            break;
        case 'light':

            textModal.innerHTML = `Luz da garagem acessa`
            break;
        case 'open':

            textModal.innerHTML = `Portão aberto`
            break;
        default:
            break;
    }

    alert.classList.remove('hidden');
    setTimeout(() => {
        alert.classList.add('hidden');
    }, 5000)


}