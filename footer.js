const insertFooter = document.querySelector('.insert-footer');

const currentYear = new Date().getFullYear(); 
insertFooter.innerHTML =`
    <section class="container footer">
        <div class="overlay"></div>
        <div class="footer-nav" id="top-nav">
            <div style='z-index:1'>
                <img style="width: 200px; padding-top:2rem;padding-bottom:2rem;" src="images/NHF-white.png" alt="NHF Logo">
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
                    <a href="https://www.instagram.com/norfolkhealthandfitness/"><i style='padding-right:16px' class="fa-brands fa-instagram"></i> </a>
                    <a href="https://www.facebook.com/NorfolkHealthandFitness"><i class="fa-brands fa-facebook-f"></i> </a>   
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
            <p>Developed by</p>
                <!-- Place for developer credit if needed -->
        </div>
    </section>
    `;

