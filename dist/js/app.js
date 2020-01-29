const buttons = document.querySelectorAll('button');
const modalOutter = document.querySelector('.modal-outter');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.target;
  const card = button.closest('.card');
  const modalParagraph = card.querySelector('.modal-paragraph').textContent;
  const name = card.querySelector('.name').textContent;
  const imgSrc = card.querySelector('img').src;
  console.log(modalParagraph);

  modalInner.innerHTML = `
    <img src='${imgSrc}' alt='${name}' />
    <h2>${name}</h2>
    <p>${modalParagraph}</p>
    `;

  // open modal
  modalOutter.classList.add('open');
  console.log(modalParagraph);
}

buttons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});
