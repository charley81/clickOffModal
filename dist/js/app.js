const buttons = document.querySelectorAll('button');
const modalOutter = document.querySelector('.modal-outter');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.target;
  const card = button.closest('.card');
  const modalParagraph = card.querySelector('.modal-paragraph').textContent;
  const name = card.querySelector('.name').textContent;
  const imgSrc = card.querySelector('img').src;

  modalInner.innerHTML = `
    <img width='200px' height='200px' src='${imgSrc.replace(
      '200',
      '400'
    )}' alt='${name}' />
    <h2>${name}</h2>
    <p>${modalParagraph}</p>
    `;

  // open modal
  modalOutter.classList.add('open');
}

function closeModal() {
  modalOutter.classList.remove('open');
}

modalOutter.addEventListener('click', event => {
  const isOutSide = event.target.closest('.modal-inner');
  if (!isOutSide) {
    modalOutter.classList.remove('open');
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

buttons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});
