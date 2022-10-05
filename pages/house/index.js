let modal = document.querySelector('.card-modal')

function possibilidadesUsuario(item) {
    const alert = document.querySelector('.alert');
    const textModal = document.querySelector('.textModal');

    switch (item) {
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
        default:
            break;
    }

    alert.classList.remove('hidden');
    setTimeout(() => {
        alert.classList.add('hidden');
    }, 5000)
}

function abrirModal(item) {

    let modalTitle = document.querySelector('.modal-title')
    let modalBody = document.querySelector('.modal-body')
    let modalSpeak = document.querySelector('.btn-speak')
    let btnModal = document.querySelector('.btn-modal')

    modal.classList.remove('modal')
    modalBody.classList.remove('hidden')

    switch (item) {
        case 'music':
            modalTitle.innerHTML = `Digite nome da música ou do artista:`
            modalSpeak.innerHTML = `Falar nome da música`
            btnModal.innerHTML = `Tocar`
            break;
        case 'open':
            modalTitle.innerHTML = `200 metros da casa, deseja abrir o portão?`
            modalBody.classList.add('hidden')
            modalSpeak.innerHTML = `Não`
            btnModal.innerHTML = `Sim`
            break;
        case 'ar':
            modalTitle.innerHTML = `Deseja ligar ar-condicionado de qual cômodo:`
            modalSpeak.innerHTML = `Falar cômodo`
            btnModal.innerHTML = `Ligar`
            break;

        default:
            break;
    }
}

function fecharModal() {
    modal.classList.add('modal')
}