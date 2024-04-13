const contact = document.querySelector('.insert-contact')

contact.innerHTML = `
<div class="contact">
        <div class="container">
            <div class="overlay"></div>
            <div class=" middle-align">
                <h2>Get In Touch With Us Today...</h2>
            <p>If you would like any more information then please do not hesitate to contact us. Please feel free to call, email or send us a message and we will get back to you right away. We will process your data in accordance with our Privacy Notice. You may withdraw this consent at any time by unsubscribing.</p>
            </div>
        
            <form class="email-form" data-netlify="true" data-netlify-recaptcha="true">
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
                    <textarea  id="enquiry" name="enquiry" placeholder="Enquiry" required></textarea>
                </div>

                <div data-netlify-recaptcha="true"></div>


                <div style='margin: 0 auto' class="buttons-div">
                    <button class="button red" type="submit">Contact</button>
                </div>
            </form>
        </div>
    </div>

`

