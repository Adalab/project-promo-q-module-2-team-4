"use strict";const buttonShare=document.querySelector(".js_content_share"),twitter=document.querySelector(".js_twitter"),designTitle=document.querySelector(".js_title_design"),fillTitle=document.querySelector(".js_title_fill"),shareTitle=document.querySelector(".js_title_share"),designContent=document.querySelector(".js_content_design"),fillContent=document.querySelector(".js_content_fill"),arrowIcon1=document.querySelector(".js_arrow_design"),arrowIcon2=document.querySelector(".js_arrow_fill"),arrowIcon3=document.querySelector(".js_arrow_share"),nameInput=document.querySelector(".js_name"),jobInput=document.querySelector(".js_job"),mailInput=document.querySelector(".js_email"),linkedinInput=document.querySelector(".js_linkedin"),githubInput=document.querySelector(".js_github"),telInput=document.querySelector(".js_tlf"),cardtel=document.querySelector(".js_cardtel"),cardname=document.querySelector(".js_cardname"),cardjob=document.querySelector(".js_cardjob"),cardmail=document.querySelector(".js_cardemail"),cardlinkedin=document.querySelector(".js_cardlinkedin"),cardgithub=document.querySelector(".js_cardgithub"),sectionUrl=document.querySelector(".js_paragraph"),urlServer="https://awesome-profile-cards.herokuapp.com/card",errorMsg=document.querySelector(".js_error_msg"),data={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},createNewObject=()=>{const e=nameInput.value,t=jobInput.value,a=telInput.value,r=linkedinInput.value,n=githubInput.value,o=mailInput.value;data.name=e,data.job=t,data.phone=a,data.email=o,data.linkedin=r,data.github=n};designTitle.addEventListener("click",e=>{designContent.classList.toggle("collapsed"),fillContent.classList.add("collapsed"),buttonShare.classList.add("collapsed"),twitter.classList.add("collapsed"),arrowIcon1.classList.toggle("arrow-down"),arrowIcon2.classList.contains("arrow-down")&&arrowIcon2.classList.remove("arrow-down"),arrowIcon3.classList.contains("arrow-down")&&arrowIcon3.classList.remove("arrow-down")}),fillTitle.addEventListener("click",e=>{fillContent.classList.toggle("collapsed"),designContent.classList.add("collapsed"),buttonShare.classList.add("collapsed"),twitter.classList.add("collapsed"),arrowIcon2.classList.toggle("arrow-down"),arrowIcon1.classList.contains("arrow-down")&&arrowIcon1.classList.remove("arrow-down"),arrowIcon3.classList.contains("arrow-down")&&arrowIcon3.classList.remove("arrow-down")}),shareTitle.addEventListener("click",e=>{buttonShare.classList.toggle("collapsed"),designContent.classList.add("collapsed"),fillContent.classList.add("collapsed"),twitter.classList.add("collapsed"),arrowIcon3.classList.toggle("arrow-down"),arrowIcon1.classList.contains("arrow-down")&&arrowIcon1.classList.remove("arrow-down"),arrowIcon2.classList.contains("arrow-down")&&arrowIcon2.classList.remove("arrow-down")});const renderForm=()=>{const e=nameInput.value,t=jobInput.value,a=linkedinInput.value,r=githubInput.value,n=mailInput.value,o=telInput.value;cardname.innerHTML=""!==e?e:"Nombre Apellido",cardjob.innerHTML=""!==t?t:"Front-end developer",cardlinkedin.href=""!==a?a:"https://es.linkedin.com/",cardgithub.href=""!==r?r:"https://github.com/",cardmail.href=""!==n?"mailto:"+n:"adalab@gmail.com",cardtel.href=""!==o?"tel:"+o:""};function handleKeyUp(e){createNewObject(),console.log(data),renderForm()}function createCard(){console.log(data),fetch(urlServer,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{console.log(e),e.success?(sectionUrl.innerHTML=e.cardURL,sectionUrl.href=e.cardURL):errorMsg.innerHTML="¡Ey! No has rellenado todos los campos"}).catch(e=>{console.log(e)})}nameInput.addEventListener("keyup",handleKeyUp),jobInput.addEventListener("keyup",handleKeyUp),linkedinInput.addEventListener("keyup",handleKeyUp),githubInput.addEventListener("keyup",handleKeyUp),mailInput.addEventListener("keyup",handleKeyUp),telInput.addEventListener("keyup",handleKeyUp);const allRadio=document.querySelectorAll(".js_radio"),cardPreview=document.querySelector(".js_cardPreview");function handlerRadio(e){const t=parseInt(e.currentTarget.value);data.palette=t,cardPreview.classList.remove("palette1","palette2","palette3"),cardPreview.classList.add("palette"+t)}for(const e of allRadio)e.addEventListener("click",handlerRadio);function cleanClasses(){cardPreview.classList.remove("palette1","palette2","palette3"),cardPreview.classList.add("palette1"),cardname.innerHTML="Nombre Apellido",cardjob.innerHTML="Front-end developer",cardlinkedin.href="https://es.linkedin.com/",cardgithub.href="https://github.com/",cardmail.href="#"}const cleanObject=()=>{data.palette="",data.name="",data.job="",data.phone="",data.email="",data.linkedin="",data.github="",data.photo=""},resetButton=document.querySelector(".js-reset-button");function handleReset(e){e.preventDefault(),cleanClasses(),data.palette="",data.name="",data.job="",data.phone="",data.email="",data.linkedin="",data.github="",data.photo=""}resetButton.addEventListener("click",handleReset),buttonShare.addEventListener("click",e=>{e.preventDefault(),twitter.classList.toggle("collapsed"),buttonShare.classList.add("grey"),createCard()});const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}fileField.addEventListener("change",getImage);