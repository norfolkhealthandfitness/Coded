
const insertHeader = document.querySelectorAll('.insert-header')



document.addEventListener('DOMContentLoaded', function () {
    // Identify the current page URL
    const currentPage = window.location.pathname;

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-item .header-link');

    // Loop through each link to find a match
    navLinks.forEach(link => {
        // Check if the link's href matches the current page URL
        if (link.getAttribute('href') === currentPage || link.getAttribute('href') === (currentPage.split('/').pop())) {
            // Remove active class from all (in case of any static assignments)
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to the matching link
            link.classList.add('active');
        }
    });
});


const headers = insertHeader.forEach( x => {
    return x.innerHTML = `
    <nav class="top-nav">
        <div class="navbar containerHeader">
                <div class="hide-mob social-icons">
                    <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                </div>
            
        
                <p class="hide-mob">07969494485</p>
                <a class="hide-mob" href="">info@norfolkhealthandfitness.com</a>
            
           
            <a class='button' href="https://nhfclassroom.com">LOGIN/REGISTER</a>
        
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
})










