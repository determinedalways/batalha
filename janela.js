// function toggle() {
//     var blur = document.getElementById('blur')
//     blur.classList.toggle('active')
//     var popup = document.getElementById('popup')
//     blur.classList.toggle('active')
// }

const button = document.getElementById('botao-editar')
const modal = document.querySelector('dialog')
const fechar = document.getElementById('fechar')

 function botao() {
    modal.showModal()
}

function botaoClose() {
    modal.close()
}

