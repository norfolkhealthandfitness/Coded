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
                    <li><a href="PDF files/Prospectus 2024.pdf" target="_blank">Prospectus</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>
                <ul>
                    <a href='sort later'>T: 07969494485</a> <br/>
                    <a href="mailto:info@norfolkhealthandfitness.com">E: info@norfolkhealthandfitness.com</a>
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
                    <img alt="paylater" src='images/paylater.png'/>
                    <img alt="gocardless"src='images/gocardless.png'/>
                </div>
            </div>
        </div>
        
        <span class="footer-break"></span>
        <div class="footer-nav" id="bottom-nav">
            <p>@ ${currentYear} Norfolk Health & Fitness Ltd</p>
            <div class="iceni-container">
                <p>Designed by</p>
                <img alt="desginer" src='images/iceni.png'/>
            </div>

    </section>
    `;

