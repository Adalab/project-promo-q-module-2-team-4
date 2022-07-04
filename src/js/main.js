'use strict';

/*********VARIABLES********/

const designTitle = document.querySelector('.js_title_design');
const fillTitle = document.querySelector('.js_title_fill');
const shareTitle = document.querySelector('.js_title_share');

const designContent = document.querySelector('.js_content_design');
const fillContent = document.querySelector('.js_content_fill');
const shareContent = document.querySelector('.js_content_share');

const arrowIcon1 = document.querySelector('.js_arrow_design');
const arrowIcon2 = document.querySelector('.js_arrow_fill');
const arrowIcon3 = document.querySelector('.js_arrow_share');

const nameInput = document.querySelector('.js_name_input');
const cardName = document.querySelector('.js_card_name');
const jobInput = document.querySelector('.js_job_input');
const cardJob = document.querySelector('.js_card_job');

/********COLAPSABLES*******/

const collapseForm = (event) => {
  const elementClick = event.currentTarget;
  if (elementClick.classList.contains('js_title_design')) {
    designContent.classList.toggle('collapsed');
    arrowIcon1.classList.toggle('arrow-down');
  } else if (elementClick.classList.contains('js_title_fill')) {
    fillContent.classList.toggle('collapsed');
    arrowIcon2.classList.toggle('arrow-down');
  } else if (elementClick.classList.contains('js_title_share')) {
    shareContent.classList.toggle('collapsed');
    arrowIcon3.classList.toggle('arrow-down');
  }
};

designTitle.addEventListener('click', collapseForm);
fillTitle.addEventListener('click', collapseForm);
shareTitle.addEventListener('click', collapseForm);

/*******KEYUP SIMPLE*******/

// const keyUpForm = () => {
//   cardName.innerHTML = nameInput.value;
// };

// nameInput.addEventListener('keyup', keyUpForm);


/*******KEYUP MÚLTIPLE*******/

// const keyUpForm = (event) => {
//   const keyUpElement = event.currentTarget;
//   if (keyUpElement.classList.contains('js_name_input')) {
//     cardName.innerHTML = nameInput.value;
//   } else if (keyUpElement.classList.contains('js_job_input')) {
//     cardJob.innerHTML = jobInput.value;
//   }
// };

// nameInput.addEventListener('keyup', keyUpForm);
// jobInput.addEventListener('keyup', keyUpForm);

/*******KEYUP CON OBJETO******/

const dataCard = {
  palette: 1,
  name: cardName,
  job: cardJob,
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

// const keyUpForm = (event) => {
//   const keyUpElement = event.currentTarget;
//   if (keyUpElement.classList.contains('js_name_input')) {
//     dataCard.name.innerHTML = nameInput.value;
//   } else if (keyUpElement.classList.contains('js_job_input')) {
//     dataCard.job.innerHTML = jobInput.value;
//   }
// };

// nameInput.addEventListener('keyup', keyUpForm);
// jobInput.addEventListener('keyup', keyUpForm);

const allInputs = document.querySelector('.js_all_inputs');

const handleInput = (ev) => {
const nameInput = ev.target.name;
const valueInput = ev.target.value;
data [nameInput] = valueInput;
};
// if (nameInput === 'name') {
//   dataCard.name = ev.target.value;
//   else if (nameInput === 'job') {
//     dataCard.job = valueInput;
//   }
// }
// }

allInputs.addEventListener('keyup', handleInput);

