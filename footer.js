const insertFooter = document.querySelectorAll('.insert-footer');

const currentYear = new Date().getFullYear(); // Get the current year

insertFooter.forEach(x => {
    x.innerHTML =`
    <section class="container footer">
        <div class="overlay"></div>
        <div class="footer-nav" id="top-nav">
            <img style="width: 150px; z-index:1000;" src="images/NHF-white.png" alt="NHF Logo">
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="FAQ.html">FAQ's</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <div class="email-number-contact">
                    <p><a href="tel:+07743978158">07743978158</a></p>
                </div>
                <div class="email-number-contact">
                    <ul>
                        <li><a href="mailto:info@norfolkhealthandfitness.com">info@norfolkhealthandfitness.com</a></li>
                    </ul>
                </div>
            </div>
            <div class="buttons-div">
                <a class="button green" href="contact.html">Contact</a>
            </div>
        </div>
        <span class="footer-break"></span>
        <div class="footer-nav" id="bottom-nav">
            <p>@ ${currentYear} Norfolk Health & Fitness Ltd</p>
            <a href="PrivacyPolicy.html">Privacy Policy</a>
            <a href="Terms-and-Conditions.html">Terms and Conditions</a>
            <div class="flex-row footer-logo">
                <p>Developed by</p>
                <!-- Place for developer credit if needed -->
            </div>
        </div>
    </section>
    `;
});
