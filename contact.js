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
                <p>If you have any queries about any of our courses or if you require any further information, please contact us by adding your details below and one of our team will get right back to you. We will process your data in accordance with our Privacy Notice. You may withdraw this consent at any time by unsubscribing.</p>
            </div>
            <form class="email-form" method="POST" action="https://formspree.io/f/mqkrnoyw">
                <div class="contact-info" style="display: flex; flex-direction: column; gap: 10px;">
                    <div class="form-group">
                        <label for="fullName">Name</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required>
                    </div>
                    <div class="form-group">
                        <label for="emailAddress">Email Address</label>
                        <input type="email" id="emailAddress" name="emailAddress" placeholder="Email Address" required>
                    </div>
                    <div class="form-group">
                        <label for="enquiry">Message</label>
                        <textarea id="enquiry" name="enquiry" placeholder="Your Message" required></textarea>
                    </div>
                    <div class="buttons-div" style="display: flex; justify-content: center; margin-top: 1rem;">
                        <button class="button red" type="submit">Contact</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    
        `;
    } else {
        console.error("The insert-contact class element was not found.");
    }
});
