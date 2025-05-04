function toggleMenu() {
  const navLinks = document.querySelector('.nav_links');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav_links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.querySelector('.nav_links').classList.remove('active');
      document.querySelector('.hamburger').classList.remove('active');
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const navLinks = document.querySelector('.nav_links');
  const hamburger = document.querySelector('.hamburger');
  
  const isClickInsideNav = navLinks.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;
//   const floatingMenu = document.getElementById('floating-menu');

//   if (scrollY > 100) { // Adjust threshold as needed
//     floatingMenu.style.display = 'flex';
//     floatingMenu.style.justifyContent = 'center';
//     floatingMenu.style.alignItems = 'center';
//   } else {
//     floatingMenu.style.display = 'none';
//   }
// });

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const floatingMenu = document.getElementById('floating-menu');

  if (scrollY > 100) {
    floatingMenu.classList.add('show');
  } else {
    floatingMenu.classList.remove('show');
  }
});

//about
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

//about
function toggleText(btn) {
  const service = btn.closest('.service');
  const shortText = service.querySelector('.desc.short');
  const fullText = service.querySelector('.desc.full');

  const isExpanded = fullText.style.display === 'block';
  fullText.style.display = isExpanded ? 'none' : 'block';
  shortText.style.display = isExpanded ? 'block' : 'none';
  btn.textContent = isExpanded ? 'See more' : 'See less';
}