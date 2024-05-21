const insertFooter = document.querySelector('.insert-footer');

const currentYear = new Date().getFullYear(); 
insertFooter.innerHTML = `
<footer class="footer">
        <div class='container'>
        <div class="overlay"></div>
        <div class="footer-nav footer-center" aria-label="Footer navigation">
            <div class='footer-mobile-partition' style="z-index:1">
                <img style="width: 200px; padding-top:2rem;padding-bottom:2rem;" src="Images/NHF-branding.webp" alt="NHF Logo">
            </div>
            <div class='footer-mobile-partition'>
                <h3>Further Links</h3>
                <ul>
                    <li><a href="appeals.html">Appeals Procedure</a></li>
                    <li><a href="termsconditions.html">Terms & Conditions</a></li>
                    <li><a href="privacypolicy.html">Privacy Policy</a></li>
                    <li><a href="PDF files/Prospectus 2024.pdf" target="_blank" rel="noopener noreferrer">Course Prospectus</a></li>
                </ul>
            </div>
            <div class='footer-mobile-partition'>
                <h3>Contact Us</h3>
                <address>
                    <ul>
                        <li>
                            <a href="tel:+447969494485">T: 07969 494485</a>
                        </li>
                        <li>
                            <a href="mailto:info@norfolkhealthandfitness.com">E: info@norfolkhealthandfitness.com</a>
                        </li>
                    </ul>
                    <p>Gym: The Union Building, 51-59 Rose Lane, Norwich, Norfolk, NR1 1BY</p>
                    <p>Company Number: 10552056</p>
                    <p>Registered Address: 10a Castle Meadow, Norwich, United Kingdom, NR1 3DE</p>
                </address>
            </div>
            <div class='footer-mobile-partition'>
                <h3>Follow Us</h3>
                <div class="hide-mob social-icons">
                    <a href="https://www.instagram.com/norfolkhealthandfitness/" aria-label="Follow us on Instagram">
                        <i style="padding-right:16px" class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/NorfolkHealthandFitness" aria-label="Follow us on Facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <p>Payment plans available with</p>
                <div class="payLater">
                    <img alt="PayLater logo" src="Images/paylater.png"/>
                    <img alt="GoCardless logo" src="Images/gocardless.png"/>
                </div>
            </div>
        </div>

        <div class="footer-bottom-desktop footer-center" >
            <p>&copy; ${currentYear} Norfolk Health & Fitness Ltd</p>
            <div class="iceni-container">
                <p>Designed by</p>
                <img alt="Iceni design logo" src="Images/iceni.webp"/>
            </div>
        </div>
        </div>
    </footer>
`