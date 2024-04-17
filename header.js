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

    


    // function toggleCustomSwitch() {
    //     const toggle = document.querySelector('.custom-toggle-switch');
    //     const circle = document.querySelector('.switch-circle');
    //     const buttons = document.querySelectorAll('.button');

    //     isResponsive = !isResponsive; // Toggle the boolean state

    //     if (isResponsive) {
    //         toggle.style.backgroundColor = 'black';
    //         circle.style.transform = 'translateX(30px)';
    //         buttons.forEach(button => button.style.backgroundColor = '#AE1320');
    //     } else {
    //         toggle.style.backgroundColor = 'grey';
    //         circle.style.transform = 'translateX(0)';
    //         buttons.forEach(button => button.style.backgroundColor = '#E93946');
    //     }
    // }



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

                <div class="social-icons hide-mob">
                    <i style='margin-right:16px' class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>

                <div class='headericon'>
                    <i  class="fa-regular fa-phone"></i>
                    <p>07969494485</p>
                </div>
                
                <div class='headericon'>
                    <i class="fa-regular fa-envelope"></i>
                    <a href="">info@norfolkhealthandfitness.com</a>
                </div>

                <div class="toggle-holder">
                    <p>Default</p>
                    <div class="toggle-wrapper">
                        <div class="custom-toggle-switch" onclick="toggleCustomSwitch()">
                            <div class="switch-circle"></div>
                        </div>
                    </div>
                    <p>Accessible</p>
                </div>
                
            
           
            <a class='button hide-mob' href="https://nhfclassroom.com">LOGIN/REGISTER</a>
        
            <img class="gym-logo" src="Images/NHFGYM.webp" alt="NHF Gym logo">
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
                    <a class="header-link" href="courses.html" class="nav-link">COURSES</a>
                </li>
    
                <li class="nav-item">
                    <a class="header-link" href="2023-2024-Prospectus.pdf" target="_blank">PROSPECTUS</a>
                </li>

                <li class="nav-item">
                    <a class="header-link" href="blogs.html" §>BLOG</a>
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











