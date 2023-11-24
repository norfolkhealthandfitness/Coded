// Header bar
const insertHeader = document.querySelectorAll('.insert-header')

insertHeader.forEach(x =>{
  x.innerHTML = `    
  <nav class = "navbar"> 
    <a href="index.html" class="nav-branding"> <img class="logo" src="images/LogoforJolrust.webp"></a>

    <ul class="nav-menu">
        <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
        </li>

        <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
        </li>

        <li class="nav-item">
            <a href="services.html" class="nav-link">Services</a>
        </li>

        <li class="nav-item">
            <a href="blog.html" class="nav-link">Blog</a>
        </li>

        <li class="nav-item">
            <a  href="gallery.html" class="nav-link">Gallery</a>
        </li>

        <li class="nav-item">
            <a  href="FAQ.html" class="nav-link">FAQ's</a>
        </li>
      
        <li class="nav-item">
            <a class="button green" href="contact.html" class="button primary-button nav-link">Contact</a>
          </li>
    </ul>
    <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>

</nav>` 
})








