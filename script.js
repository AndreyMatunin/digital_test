const buttonContainer = document.querySelector('.main');
const buttons = buttonContainer.getElementsByTagName('button');
const img = document.querySelector('.img');

buttonContainer.addEventListener('click', event => {
  const targetButton = event.target.closest('button');

  if (targetButton) {
    targetButton.classList.toggle('active');
  } else {
    [...buttons].forEach(element => {
      if (element.classList.contains('active')) {
        element.classList.toggle('active');
      }
    });
  }
});