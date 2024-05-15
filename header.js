
const insertHeader = document.querySelector('.insert-header')
insertHeader.innerHTML = `
 <nav class="top-nav" role="navigation" aria-label="Main navigation">
 <div class="navbar containerHeader">
     <div class="hidemob social-icons">
         <a href="https://www.instagram.com/norfolkhealthandfitness/" aria-label="Instagram">
             <i class="fa-brands fa-instagram" aria-hidden="true"></i> 
         </a>
         <a href="https://www.facebook.com/NorfolkHealthandFitness" aria-label="Facebook">
             <i class="fa-brands fa-facebook-f" aria-hidden="true"></i> 
         </a>
     </div>

     <div style="gap: 32px;" class="hidemob">
         <div class='headericon'>
             <i class="fa-regular fa-phone" aria-hidden="true"></i>
             <p aria-label="Phone number">07969494485</p>
         </div>
     
         <div class='headericon'>
             <i class="fa-regular fa-envelope" aria-hidden="true"></i>
             <a href="mailto:info@norfolkhealthandfitness.com">info@norfolkhealthandfitness.com</a>
         </div>
     </div>

     <div class="toggle-holder hidemob">
         <p>Default</p>
         <div class="toggle-wrapper">
             <div class="custom-toggle-switch" onclick="toggleCustomSwitch()" role="switch" aria-checked="false" aria-label="Accessibility toggle" tabindex="0">
                 <div class="switch-circle"></div>
             </div>
         </div>
         <p>Accessible</p>
     </div>

     <a class='button' href="https://nhfclassroom.com">LOGIN/REGISTER</a>
     <a href="https://nhfgym.com">
         <img class="gym-logo" src="Images/NHFGYM.webp" alt="NHF Gym logo">
     </a>
 </div>
</nav>

<!-- Start of the beginning of the header section -->

<!-- Start of the lower header section -->

<nav class="navbar containerHeader" role="navigation" aria-label="Secondary navigation">
 <a href="index.html" class="nav-branding">
     <img class="logo" alt="NHF logo" src="images/NHFLOGO.webp">
 </a>

 <ul class="nav-menu">
     <li class="nav-item">
         <a class="header-link nav-link" href="index.html">HOME</a>
     </li>

     <li class="nav-item">
         <a class="header-link nav-link" href="about.html">ABOUT</a>
     </li>

     <li class="nav-item">
         <a class="header-link nav-link" href="start-your-career.html">COURSES</a>
     </li>

     <li class="nav-item">
         <a class="header-link nav-link" href="PDF files/Prospectus 2024.pdf" target="_blank">PROSPECTUS</a>
     </li>

     <li class="nav-item">
         <a class="header-link nav-link" href="blogs.html">BLOG</a>
     </li>

     <li class="nav-item">
         <a class="header-link nav-link" href="FAQ.html">FAQ's</a>
     </li>

     <li class="nav-item">
         <a class="header-link nav-link" href="contact.html">CONTACT</a>
     </li>
 </ul>

 <button class="hamburger" aria-label="Open menu" aria-expanded="false">
     <span class="bar"></span>
     <span class="bar"></span>
     <span class="bar"></span>
 </button>
</nav>
    `

var isResponsive = localStorage.getItem('toggleState') === 'true'; 

function toggleCustomSwitch() {
    const toggle = document.querySelector('.custom-toggle-switch');
    const circle = document.querySelector('.switch-circle');
    const buttons = document.querySelectorAll('.button');
    const fa = document.querySelectorAll('.fa-solid, .fa-regular, .fa-brands');

    isResponsive = !isResponsive; 
    localStorage.setItem('toggleState', isResponsive.toString()); // Save the new state to local storage correctly

    updateUI(isResponsive, toggle, circle, buttons, fa); // Pass all needed elements to the function
}

function updateUI(isActive, toggle, circle, buttons, fa) { // Include 'fa' in the parameters
    if (isActive) {
        toggle.style.backgroundColor = 'white';
        circle.style.transform = 'translateX(30px)';
        buttons.forEach(button => button.style.backgroundColor = '#AE1320');
        fa.forEach(icon => icon.style.color = '#AE1320'); // Now 'fa' is defined and should work
    } else {
        toggle.style.backgroundColor = 'grey';
        circle.style.transform = 'translateX(0)';
        buttons.forEach(button => button.style.backgroundColor = '#E93946');
        fa.forEach(icon => icon.style.color = '#E93946'); // Apply color changes to icons correctly
    }
}

window.onload = function() {
    const toggle = document.querySelector('.custom-toggle-switch');
    const circle = document.querySelector('.switch-circle');
    const buttons = document.querySelectorAll('.button');
    const fa = document.querySelectorAll('.fa-solid, .fa-regular, .fa-brands');
    updateUI(isResponsive, toggle, circle, buttons, fa); // Initialize UI on load
};




document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item .header-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || link.getAttribute('href') === (currentPage.split('/').pop())) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});


 










