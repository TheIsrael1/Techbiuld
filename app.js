//1. toggle btn
//2. fixed nav
//3. back to top btn
// 4. scroll link


//toggle btn

const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {

 linkContainerHeight = linkContainer.getBoundingClientRect().height;
 linksHeight = links.getBoundingClientRect().height;
 if (linkContainerHeight === 0) {
  linkContainer.style.height = `${linksHeight}px`
 } else {
  linkContainer.style.height = 0;
 }


});

//********** Fixed Nav */

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {

 linkContainer.style.height = 0;
 const scrollHeight = window.pageYOffset;
 const navHeight = navbar.getBoundingClientRect().height;
 if (scrollHeight > navHeight) {
  navbar.classList.add('fixed-nav');
 } else {
  navbar.classList.remove('fixed-nav');
 }

 //back to top link

 if (scrollHeight > 400) {
  topLink.classList.add('show-link');
 } else {
  topLink.classList.remove('show-link');
 }


});


//******Smooth scroll******/
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
 link.addEventListener("click", (e) => {
  //prevent default
  e.preventDefault();
  //navigate
  const id = e.currentTarget.getAttribute('href').slice(1);
  const element = document.getElementById(id);

  navHeight = navbar.getBoundingClientRect().height;
  containerHeight = linkContainer.getBoundingClientRect().height;
  const fixedNav = navbar.classList.contains('fixed-nav');

  position = element.offsetTop - navHeight;

  if (!fixedNav) {
   position = position - navHeight;
  } else {
   position = position + containerHeight;
  }

  window.scrollTo({
   left: 0,
   top: position,
  });

  //close
  linkContainer.style.height = 0;

 });
});
