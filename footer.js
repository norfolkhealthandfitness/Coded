const insertFooter = document.querySelector('.insert-footer');

const currentYear = new Date().getFullYear(); // Get the current year

insertFooter.innerHTML =`
    <section class="container footer">
        <div class="overlay"></div>
        <div class="footer-nav" id="top-nav">
            <div style='display:flex; align-items: center; flex-direction:column'>
                <img style="width: 150px; margin-top:50px; z-index:1000;" src="images/NHF-white.png" alt="NHF Logo">
            </div>
            <div>
                <h4>Further Links</h4>
                <ul>
                    <li><a href="appeals.html">Appeals Procedure</a></li>
                    <li><a href="termsconditions.html">Terms & Conditions</a></li>
                    <li><a href="privacypolicy.html">Privacy Policy</a></li>
                    <li><a href="2023-2024-Prospectus.pdf" target="_blank">Prospectus</a></li>
                </ul>
            </div>
            <div>
            <h4>Contact Us</h4>
            <ul>
                <p>T: 07969494485</p>
                <p>E: info@norfolkhealthandfitness.com</p>
                <p>Gym: The Union Building, 51-59 Rose Lane, Norwich, Norfolk, NR1 1BY</p>
                <p>Company Number: 10552056</p>
                <p>Registered Address: 10a Castle Meadow, Norwich, United Kingdom, NR1 3DE</p>
            </ul>
        </div>
            <div>
                <h4>Follow Us</h4>
                <div class="hide-mob social-icons">
                    <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                </div>
                <p style='font-weight:bold; font-size:13px'>Payment plans available with</p>
                <div style="display:flex; flex-direction: row; height:20px; gap:20px;">
                    <img src='images/paylater.png'/>
                    <img src='images/gocardless.png'/>
                </div>
            </div>
            <div class="buttons-div">
                <a style=' margin-top:50px;' class="button green" href="contact.html">Contact</a>
            </div>
        </div>
        <span style='margin-top:25px; margin-bottom:25px;' class="footer-break"></span>
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

