"use strict";

const designTitle = document.querySelector(".js_title_design");
const fillTitle = document.querySelector(".js_title_fill");
const shareTitle = document.querySelector(".js_title_share");

const designContent = document.querySelector(".js_content_design");
const fillContent = document.querySelector(".js_content_fill");
const shareContent = document.querySelector(".js_content_share");

const arrowIcon = document.querySelector(".js_arrow");

designTitle.addEventListener("click", (event) =>
  designContent.classList.toggle("collapsed")
);

fillTitle.addEventListener("click", (event) =>
  fillContent.classList.toggle("collapsed")
);

shareTitle.addEventListener("click", (event) =>
  shareContent.classList.toggle("collapsed")
);
