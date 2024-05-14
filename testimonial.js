
const testimonialData =[
        {
          review: "I can't recommend kevin and his team enough for the opportunity he has given me to further my career. I never thought that I would get through it with my training demands. But kev was patient with me and knew how to get the best out of me. The last few months have been brilliant, iv met some great people on the way also. So if anyone's wants a career change or to further their knowledge kevin is the guy to push you there.",
          name: "Nathan Dale",
          image : 'Images/nathan.webp',
          date: '03/2018'
        },
        {
          review: "Kevin has been really helpful, supportive and encouraged to me, understanding how important it is to me to achieve this qualification despite my disability. He is a great mentor and has kept me motivated when I felt overwhelmed with some of the content, keeping me positive when I have struggled. I would recommend both Kevin and his course to anyone wishing to improve their knowledge and ability. So if anyone's wants a career change or to further their knowledge kevin is the guy to push you there.",
          name: "Sam Pardoe",
          image : 'Images/sam.webp',
          date: '07/2017'
        },
        {
          review: "I've just qualified as a level 3 personal trainer at Norfolk health& fitness. I managed to qualify whilst working full-time with excellent support from Kevin. we managed to arrange our one to one sessions around my work schedule which has helped me so much during the course. I thoroughly recommend the course to anyone who is looking to qualify and work in the fitness industry. I am now working as a personal trainer at the 24/7 gym in Norwich. thanks again Kevin.",
          name: "Jay Wall",
          image : 'Images/jay.webp',
          date: '12/2017'
        },
        {
          review: "I really enjoyed my course with kev and his team they're knowledge is incredible it was really fun very informative, they are all really helpful and friendly!! I run a business full time and this was very flexible and fit in really well around it. The practical workshops are brilliant. Can't fault norfolk health and fitness I will deffo be back for more courses in the future",
          name: "Abz Denney",
          image : 'Images/abz.webp',
          date: '02/2018'
        },
        {
          review: "Kev taught my Level 2 Gym Instruction and Level 3 Personal Training. He was passionate about fitness and very knowledgeable. His high standards inspired me to work harder. I have since gone on to take a GP Referral Course and Level 4 Cardiac Rehab course. I now run Cardiac rehab classes. There are so many opportunities in the fitness industry, and Kev is the best person you to get you started",
          name: "Susan Bennett",
          image : 'Images/susan.webp',
          date: '03/2017'
        },
        {
          review: "Really recommend anyone that's interested in becoming a PT to go with Norfolk H&F. Kevin is a fantastic mentor, he is very motivational and helpful! Being someone who has struggled to keep up with my education, I have now two qualifications that'll take me anywhere I'd like within the fitness industry! I'm so pleased to have passed! Definitely a challenge but manageable. You get it done in less than half the time you would take doing it in college!",
          name: "Kelly Salvadore Adams",
          image : 'Images/kelly.webp',
          date: '07/2017'
        },

      ]
    

const testimonialContent = document.querySelector('.testimonial-content')

testimonialContent.innerHTML=testimonialData.map(testimonial =>{
    return `
    <div class="testimonial-reviews">
        <p class='review-content'>${testimonial.review}</p>
        <img class='testimonial-image' src=${testimonial.image} alt="">
        <h4 style='margin-top:-1px'>${testimonial.name}</h4>  
        <p style='margin-top:-20px; margin-bottom:15px'>Qualified with us on: ${testimonial.date} </p>
      <a target='_blank' style='max-width:250px; margin:0 auto; margin-bottom:10px;' class="button" href="https://www.google.com/maps/place/Norfolk+Health+%26+Fitness/@52.630438,1.2927928,16z/data=!3m1!5s0x47d8f39f8b8a236d:0xdb475282c2b65912!4m12!1m2!2m1!1sNORFOLK+health+fitness!3m8!1s0x47d9e3aeeaa67503:0x5dc447d41e277c9b!8m2!3d52.6283042!4d1.3012555!9m1!1b1!15sChZOT1JGT0xLIGhlYWx0aCBmaXRuZXNzWhgiFm5vcmZvbGsgaGVhbHRoIGZpdG5lc3OSARF0cmFpbmluZ19wcm92aWRlcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNMlozQklZa04zRUFF4AEA!16s%2Fg%2F11j7grdxkb?entry=ttu">VIEW ALL OF OUR REVIEWS</a>
    </div>
    `
}).join('')




document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-reviews");
    const leftArrow = document.getElementById("leftarrow");
    const rightArrow = document.getElementById("rightarrow");

    let currentIndex = 0;

    // Function to show a specific testimonial by index
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = "block";
            } else {
                testimonial.style.display = "none";
            }
        });
    }

    // Initial display
    showTestimonial(currentIndex);

    // Event listener for clicking the right arrow
    rightArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    // Event listener for clicking the left arrow
    leftArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
});