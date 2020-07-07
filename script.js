const modalOverlay = document.querySelector('.modal-overlay') //document tem todos os objetos ex: body, div
const cards = document.querySelectorAll('.card') // pega todos os elementos com classe "card"

for (let card of cards) {
    card.addEventListener("click", function(){  //evento click para fazer algo
        
        const videoId = card.getAttribute("id") //após clicar se atribui varialvel a ID do video clicado
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`

    })
}

const closeModal = document.querySelector('.close-modal')

closeModal.addEventListener("click", function (){
    modalOverlay.classList.remove('active') // remove classe active p/ fechar modal
    modalOverlay.querySelector('iframe').src = ""
})
