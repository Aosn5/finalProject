// stored the body and navbar elements in variables
// Created the navbar and section lists
const body = document.querySelector('body');
const nav = document.querySelector('.navbar__menu');
const options = document.getElementById('navbar__list');
let sectionList = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];
const fragment = document.createDocumentFragment(); //fragment to add all the navbar list items

// Loop through and create a navbar list item
for (let i = 0; i < sectionList.length; i++) {
  const li = document.createElement('li');
  const aLink = document.createElement('a');
  const sectionId = `section${i+1}`; 
  aLink.textContent = sectionList[i];
  aLink.className = 'menu__link';
  li.className = 'nav-active';
  aLink.setAttribute('href', `#${sectionId}`);
  li.appendChild(aLink); 
  fragment.appendChild(li);  
  const section = document.createElement('section');
  section.setAttribute('id', sectionId);
  body.appendChild(section);

} 
// Get all the navbar list and links
const sections = document.querySelectorAll('section');
const aLinks = document.querySelectorAll('.menu__link');

aLinks.forEach((aLink) => {
// Add event listener to each item
    aLink.addEventListener('click', (ev) => {
//smooth scroll
const sectionId = aLink.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView(
      {behavior: "smooth"});
           
// Remove & add the 'nav-active' class 
   aLinks.forEach((link) => link.classList.remove('nav-active')); 
   aLink.classList.add('nav-active'); 
// Prevent the default
      ev.preventDefault(); 
    });
  });
// Add event listener to window to display viewport
// Loop through each section in the viewport
document.querySelectorAll('.nav-active').forEach((link) => {
  link.classList.remove('nav-active');
});

window.addEventListener('scroll', () => {

    sections.forEach((section, i) => {

   if(
        sections[i].getBoundingClientRect().top <= 150 &&
        sections[i].getBoundingClientRect().bottom >= 150
    ){
      sections[i].classList.add('your-active-class');
       //Add active state and 
       document.querySelectorAll('.nav-active').forEach((link) => {
        link.classList.remove('nav-active');
     });
     //section to corresponding nav link
        const sectionId = `#section${i + 1}`;
        const navLink = document.querySelector(`a[href="${sectionId}"]`);
        navLink.classList.add('nav-active');
    } 
    else {
      sections[i].classList.remove('your-active-class');
      //Remove active state and section to corresponding nav link
      const sectionId = `#section${i + 1}`;
      const navLink = document.querySelector(`a[href="${sectionId}"]`);
      navLink.classList.remove('nav-active'); 
        }
    });
});

// Append the navbar items to the navbar
options.appendChild(fragment);







