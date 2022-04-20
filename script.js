/** help */
function log(message) {
    console.log("> " + message)
}

/** app */

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/** Cartões */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    // log("CARD: Start draggin")
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
    
    // this = card
    this.classList.add('is-dragging')
}

function drag() {
    // log("CARD: Is draggin")
}

function dragend() {
    // log("CARD: Stop drag!")
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
    
    // this = card
    this.classList.remove('is-dragging')
}

// Place where we will drop cards
// Local onde vou salvar os cartões
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drag', drag)
})

function dragenter() {
    // log("DROPZONE: Enter in zone")
}

function dragover() {
    // log("DORPZONE: Over")

    // this = DROPZONE
    this.classList.add('over')

    //get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = DROPZONE
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    // log("DROPZONE: Leave")

    // this = DROPZONE
    this.classList.remove('over')
}

function drag() {
    // log("DROPZONE: dropped")
    this.classList.remove('over')
}