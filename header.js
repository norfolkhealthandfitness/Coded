document.addEventListener("DOMContentLoaded", () => {
    const insertHeader = document.querySelector('.insert-header');

    insertHeader.innerHTML = `
        <header>
            <nav class="top-nav">
                <div class="navbar containerHeader">
                    <div class="hidemob social-icons">
                        <a href="https://www.instagram.com/norfolkhealthandfitness/" aria-label="Follow us on Instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/NorfolkHealthandFitness" aria-label="Follow us on Facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                    <div style="gap: 32px;" class="hidemob">
                        <div class='headericon'>
                            <i class="fa-regular fa-phone" aria-hidden="true"></i>
                            <a href="tel:+447969494485">07969494485</a>
                        </div>
                        <div class='headericon'>
                            <i class="fa-regular fa-envelope" aria-hidden="true"></i>
                            <a href="mailto:info@norfolkhealthandfitness.com">info@norfolkhealthandfitness.com</a>
                        </div>
                    </div>
                    <div class="toggle-holder hidemob">
                        <p>Default</p>
                        <div class="toggle-wrapper">
                            <div class="custom-toggle-switch" role="switch" aria-checked="false" tabindex="0">
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
            <nav class="navbar containerHeader">
                <a href="index.html" class="nav-branding">
                    <img class="logo" alt="Norfolk Health and Fitness logo" src="images/NHFLOGO.webp">
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
                        <a class="header-link" href="PDF files/Prospectus 2024.pdf" target="_blank" rel="noopener noreferrer">PROSPECTUS</a>
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
                <button class="hamburger" aria-label="Toggle navigation menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </nav>
        </header>
    `;

    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item .header-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || link.getAttribute('href') === (currentPage.split('/').pop())) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });

    const toggle = document.querySelector('.custom-toggle-switch');
    const circle = document.querySelector('.switch-circle');
    const buttons = document.querySelectorAll('.button');
    const fa = document.querySelectorAll('.fa-solid, .fa-regular, .fa-brands');
    let isResponsive = localStorage.getItem('toggleState') === 'true';

    function updateUI(isActive) {
        if (isActive) {
            toggle.style.backgroundColor = 'white';
            circle.style.transform = 'translateX(30px)';
            buttons.forEach(button => button.style.backgroundColor = '#AE1320');
            fa.forEach(icon => icon.style.color = '#AE1320');
            toggle.setAttribute('aria-checked', 'true');
        } else {
            toggle.style.backgroundColor = 'grey';
            circle.style.transform = 'translateX(0)';
            buttons.forEach(button => button.style.backgroundColor = '#E93946');
            fa.forEach(icon => icon.style.color = '#E93946');
            toggle.setAttribute('aria-checked', 'false');
        }
    }

    toggle.addEventListener('click', () => {
        isResponsive = !isResponsive;
        localStorage.setItem('toggleState', isResponsive.toString());
        updateUI(isResponsive);
    });

    updateUI(isResponsive);

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(m => m.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});