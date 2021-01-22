const modal = document.querySelector('.modal')
const modalBackdrop = document.querySelector('.modal-backdrop')
const modalImage = document.querySelector('.modal__img')

const portfolioImages = document.querySelectorAll('.portfolio__image')
portfolioImages.forEach((image) => {
  image.addEventListener('click', function (event) {
    modalImage.setAttribute('src', event.target.getAttribute('src'))
    modalBackdrop.classList.toggle('closed')
  })
})
const modalCloseBtn = document.querySelector('.modal__close-btn')
modalCloseBtn.addEventListener('click', () => {
  modalBackdrop.classList.toggle('closed')
})
let modalImg = document.querySelector('.modal__img')
img.onclick = function () {
  modal.style.display = 'block'
  modalImg.src = this.src
  modalImg.alt = this.alt
  captionText.innerHTML = this.alt
}

let span = document.querySelector('.modal__close-btn')
span.onclick = function () {
  modal.style.display = 'none'
}
console.log(11)

const heroBtn = document.querySelector('.hero__btn')
heroBtn.addEventListener('click', openContactform)

function openContactform() {
  console.log(11)
  let modalFrame = document.querySelector('.frame')
  modalFrame.classList.toggle('closed')
}
