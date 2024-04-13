const insertFooter = document.querySelector('.insert-footer');

const currentYear = new Date().getFullYear(); // Get the current year

insertFooter.innerHTML =`
    <section class="container footer">
        <div class="overlay"></div>
        <div class="footer-nav" id="top-nav">
            <div style='z-index:1'>
                <img style="width: 150px; " src="images/NHF-white.png" alt="NHF Logo">
            </div>
            <div>
                <h3>Further Links</h3>
                <ul>
                    <li><a href="appeals.html">Appeals Procedure</a></li>
                    <li><a href="termsconditions.html">Terms & Conditions</a></li>
                    <li><a href="privacypolicy.html">Privacy Policy</a></li>
                    <li><a href="2023-2024-Prospectus.pdf" target="_blank">Prospectus</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>
                <ul>
                    <p>T: 07969494485</p>
                    <p>E: info@norfolkhealthandfitness.com</p>
                    <p>Gym: The Union Building, 51-59 Rose Lane, Norwich, Norfolk, NR1 1BY</p>
                    <p>Company Number: 10552056</p>
                    <p>Registered Address: 10a Castle Meadow, Norwich, United Kingdom, NR1 3DE</p>
                </ul>
            </div>
            <div>
                <h3>Follow Us</h3>
                <div class="hide-mob social-icons">
                    <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                </div>
                <p>Payment plans available with</p>
                <div class="payLater">
                    <img src='images/paylater.png'/>
                    <img src='images/gocardless.png'/>
                </div>
            </div>
        </div>
        
        <span class="footer-break"></span>
        <div class="footer-nav" id="bottom-nav">
            <p>@ ${currentYear} Norfolk Health & Fitness Ltd</p>
            <a href="PrivacyPolicy.html">Privacy Policy</a>
            <a href="termsconditions.html">Terms and Conditions</a>
            <div class="flex-row footer-logo">
                <p>Developed by</p>
                <!-- Place for developer credit if needed -->
            </div>
        </div>
    </section>
    `;

