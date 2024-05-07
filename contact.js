document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    const contact = document.querySelector('.insert-contact');
    if (contact) {
        contact.innerHTML = `
            <div class="contact">
                <div class="contact-container">
                    <div class="overlay"></div>
                    <div style='margin-bottom: 24px; margin-top:24px; text-align: center'>
                        <h2>I want to talk to someone</h2>
                        <p>If you have any queries about any of our courses or if you require any further information, please contact us by adding your details below and one of our team will get right back to you. We will process your data in accordance with our Privacy Notice. You may withdraw this consent at any time by unsubscribing.

                        </p>
                    </div>

                    <form class="email-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" name="contactForm">
                        <input type="hidden" name="form-name" value="contactForm">
                        <div class="name-group">
                            <div class="form-group name-box">
                                <label for="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" required>
                            </div>
                            <div class="form-group name-box">
                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Email Address</label>
                            <input type="email" id="emailAddress" name="emailAddress" placeholder="Email Address" required>
                        </div>
                        <div class="form-group">
                            <label for="enquiry">Enquiry</label>
                            <textarea id="enquiry" name="enquiry" placeholder="Enquiry" required></textarea>
                        </div>
                        <div data-netlify-recaptcha="true"></div>
                        <div style='margin: 0 auto;' class="buttons-div">
                            <button class="button red" type="submit">Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    } else {
        console.error("The insert-contact class element was not found.");
    }
});

// Be sure to include this in your HTML to load reCAPTCHA:
// <script src="https://
