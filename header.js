var isResponsive = localStorage.getItem('toggleState') === 'true'; // Get saved state from local storage

function toggleCustomSwitch() {
    const toggle = document.querySelector('.custom-toggle-switch');
    const circle = document.querySelector('.switch-circle');
    const buttons = document.querySelectorAll('.button');
    const fa = document.querySelectorAll('.fa-solid, .fa-regular, .fa-brands');

    isResponsive = !isResponsive; // Toggle the boolean state
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

const insertHeader = document.querySelector('.insert-header')

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


 insertHeader.innerHTML = `
    <nav class=" top-nav">
        <div class="navbar containerHeader">

                <div class="hidemob social-icons">
                    <a href="https://www.instagram.com/norfolkhealthandfitness/"><i class="fa-brands fa-instagram"></i> </a>
                    <a href="https://www.facebook.com/NorfolkHealthandFitness"><i class="fa-brands fa-facebook-f"></i> </a>
                </div>

                <div style="gap: 32px;" class="hidemob">
                <div class='headericon'>
                    <i class="fa-regular fa-phone"></i>
                    <p>07969494485</p>
                </div>
            
                <div class='headericon'>
                    <i class="fa-regular fa-envelope"></i>
                    <a href="mailto:info@norfolkhealthandfitness.com">info@norfolkhealthandfitness.com</a>
                </div>
            </div>
            

                <div class="toggle-holder hidemob">
                    <p>Default</p>
                    <div class="toggle-wrapper">
                        <div class="custom-toggle-switch" onclick="toggleCustomSwitch()">
                            <div class="switch-circle"></div>
                        </div>
                    </div>
                    <p>Accessible</p>
                </div>
                
            
           
            <a class='button' href="https://nhfclassroom.com">LOGIN/REGISTER</a>
            <a href="https://nhfgym.com"><img class="gym-logo" src="Images/NHFGYM.webp" alt="NHF Gym logo"></a>
        
            
        </div>
    </nav>
    
    <!--    Start of beggining of header section      -->
    
    <!--    Start of lower of header section          -->
    
    
        <nav class = "navbar containerHeader"> 
            <a href="index.html" class="nav-branding"> <img class="logo" alt="logo"  src="images/NHFLOGO.webp"></a>
      
            <ul class="nav-menu">
                <li class="nav-item">
                    <a class="header-link" href="index.html" class="nav-link">HOME</a>
                </li>
      
                <li class="nav-item">
                    <a class="header-link" href="about.html" class="nav-link">ABOUT</a>
                </li>
      
                <li class="nav-item">
                    <a class="header-link" href="start-your-career.html" class="nav-link">COURSES</a>
                </li>
    
                <li class="nav-item">
                    <a class="header-link" href="PDF files/Prospectus 2024.pdf" target="_blank">PROSPECTUS</a>
                </li>

                <li class="nav-item">
                    <a class="header-link" href="blogs.html">BLOG</a>
                </li>
    
                <li class="nav-item">
                    <a class="header-link" href="FAQ.html" class="nav-link">FAQ's</a>
                </li>
              
                <li class="nav-item">
                    <a class="header-link" href="contact.html">CONTACT</a>
                  </li>
            </ul>

            
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
      
        </nav>
    `











