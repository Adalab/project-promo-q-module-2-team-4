'use strict';
const buttonShare = document.querySelector('.js_content_share');
const twitter = document.querySelector('.js_twitter');

const designTitle = document.querySelector('.js_title_design');
const fillTitle = document.querySelector('.js_title_fill');
const shareTitle = document.querySelector('.js_title_share');

const designContent = document.querySelector('.js_content_design');
const fillContent = document.querySelector('.js_content_fill');
const shareContent = document.querySelector('.js_content_share');

const arrowIcon1 = document.querySelector('.js_arrow_design');
const arrowIcon2 = document.querySelector('.js_arrow_fill');
const arrowIcon3 = document.querySelector('.js_arrow_share');

designTitle.addEventListener('click', (event) => {
  designContent.classList.toggle('collapsed');
  fillContent.classList.add('collapsed');
  shareContent.classList.add('collapsed');
  twitter.classList.add('collapsed');
  arrowIcon1.classList.toggle('arrow-down');
  if (arrowIcon2.classList.contains('arrow-down')) {
    arrowIcon2.classList.remove('arrow-down');
  }
  if (arrowIcon3.classList.contains('arrow-down')) {
    arrowIcon3.classList.remove('arrow-down');
  }
});
fillTitle.addEventListener('click', (event) => {
  fillContent.classList.toggle('collapsed');
  designContent.classList.add('collapsed');
  shareContent.classList.add('collapsed');
  twitter.classList.add('collapsed');
  arrowIcon2.classList.toggle('arrow-down');
  if (arrowIcon1.classList.contains('arrow-down')) {
    arrowIcon1.classList.remove('arrow-down');
  }
  if (arrowIcon3.classList.contains('arrow-down')) {
    arrowIcon3.classList.remove('arrow-down');
  }
});
shareTitle.addEventListener('click', (event) => {
  shareContent.classList.toggle('collapsed');
  designContent.classList.add('collapsed');
  fillContent.classList.add('collapsed');
  twitter.classList.add('collapsed');
  arrowIcon3.classList.toggle('arrow-down');
  if (arrowIcon1.classList.contains('arrow-down')) {
    arrowIcon1.classList.remove('arrow-down');
  }
  if (arrowIcon2.classList.contains('arrow-down')) {
    arrowIcon2.classList.remove('arrow-down');
  }
});

const nameInput = document.querySelector('.js_name');
const jobInput = document.querySelector('.js_job');

// const emailInput = document.querySelector('.js_email');
// const tlfInput = document.querySelector('.js_tlf');
// const linkedinInput = document.querySelector('.js_linkedin');
// const githubInput = document.querySelector('.js_github');

const cardname = document.querySelector('.js_cardname');
const cardjob = document.querySelector('.js_cardjob');

function handleKeyUp(event) {
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  if (nameInputValue !== '') {
    cardname.innerHTML = nameInputValue;
  } else {
    cardname.innerHTML = `Nombre Apellido`;
  }
  if (jobInputValue !== '') {
    cardjob.innerHTML = jobInputValue;
  } else {
    cardjob.innerHTML = `Front-end developer`;
  }
}

nameInput.addEventListener('keyup', handleKeyUp);
jobInput.addEventListener('keyup', handleKeyUp);

//

buttonShare.addEventListener('click', (event) => {
  event.preventDefault();
  twitter.classList.toggle('collapsed');
  buttonShare.classList.add('grey');
});

// Añadir paleta

const cardPreview = document.querySelector('.js-card');
const clickPalette1 = document.querySelector('.js-palette1');
const clickPalette2 = document.querySelector('.js-palette2');
const clickPalette3 = document.querySelector('.js-palette3');

const addNewPaletteClass = (selectedPaletteValue) => {
  cardPreview.classList.add(selectedPaletteValue);
};

const resetPaletteClasses = () => {
  cardPreview.classList.remove('card__rectangle');
  cardPreview.classList.remove('palette1');
  cardPreview.classList.remove('palette2');
  cardPreview.classList.remove('palette3');
};

const handleClickPalette = (event) => {
  const selectedPalette = event.currentTarget;
  const selectedPaletteValue = selectedPalette.value;
  resetPaletteClasses();
  addNewPaletteClass(selectedPaletteValue);
};

clickPalette1.addEventListener('click', handleClickPalette);
clickPalette2.addEventListener('click', handleClickPalette);
clickPalette3.addEventListener('click', handleClickPalette);
