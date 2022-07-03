/* eslint-disable no-unused-vars */
'use strict';

/*DESIGN*/
const designTitle = document.querySelector('.js_title_design');
const designContent = document.querySelector('.js_content_design');

/*FILL*/
const fillTitle = document.querySelector('.js_title_fill');
const fillContent = document.querySelector('.js_content_fill');

/*SHARE*/
const shareTitle = document.querySelector('.js_title_share');
const shareContent = document.querySelector('.js_content_share');

/*ARROW*/
const arrowIcon = document.querySelector('.js_arrow');

/*FIELDSET 4*/
const ffContent = document.querySelector('js_content_share_fieldset-4');

/*-----------COLAPSABLES----------*/
/*esta función se va a ejecutar cada vez que haga click en desingHeader*/
const handleClick=(ev)=>{
  const elementClick = ev.currentTarget;
  console.log(elementClick);

  if(elementClick.classList.contains('js_title_design')){
    designContent.classList.toggle('collapsed');
  }
  else if(elementClick.classList.contains('js_title_fill')){
    fillContent.classList.toggle('collapsed');
  }
  else if(elementClick.classList.contains('js_title_share')){
    shareContent.classList.toggle('collapsed');
  }
}; 

designTitle.addEventListener('click', handleClick);
fillTitle.addEventListener('click', handleClick);
shareTitle.addEventListener('click', handleClick);