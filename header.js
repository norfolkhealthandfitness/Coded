// Header bar
const insertHeader = document.querySelectorAll('.insert-header')

const headers = insertHeader.forEach( x => {
    return x.innerHTML = `
    <nav class="top-nav">
        <div class="navbar containerHeader">
                <div class="hide-mob">
                    <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                </div>
            
        
                <p class="hide-mob">07969494485</p>
                <a class="hide-mob" href="">info@norfolkhealthandfitness.com</a>
            
    
            <a class="button red" href="https://nhfclassroom.com" target="_blank">LOGIN/REGISTER</a>
        
            <img class="gym-logo" src="Images/NHFGYM.webp" alt="NHF Gym logo">
        </div>
    </nav>
    
    <!--    Start of beggining of header section      -->
    
    <!--    Start of lower of header section          -->
    
    
        <nav class = "navbar containerHeader"> 
            <a href="index.html" class="nav-branding"> <img class="logo" alt="logo"  src="images/NHFLOGO.webp"></a>
      
            <ul class="nav-menu">
                <li class="nav-item">
                    <a class="header-link active" href="index.html" class="nav-link">HOME</a>
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










