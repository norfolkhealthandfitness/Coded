
const testimonialData =[
        {
          review: "I can't recommend kevin and his team enough for the opportunity he has given me to further my career. I never thought that I would get through it with my training demands. But kev was patient with me and knew how to get the best out of me. The last few months have been brilliant, iv met some great people on the way also. So if anyone's wants a career change or to further their knowledge kevin is the guy to push you there.",
          name: "Nathan Dale",
          image : 'Images/kelly.jpg'

        },
        {
          review: "Kevin has been really helpful, supportive and encouraged to me, understanding how important it is to me to achieve this qualification despite my disability. He is a great mentor and has kept me motivated when I felt overwhelmed with some of the content, keeping me positive when I have struggled. I would recommend both Kevin and his course to anyone wishing to improve their knowledge and ability. So if anyone's wants a career change or to further their knowledge kevin is the guy to push you there.",
          name: "Sam Pardoe",
          image : 'Images/kelly.jpg'
        },
        {
          review: "I've just qualified as a level 3 personal trainer at Norfolk health& fitness. I managed to qualify whilst working full-time with excellent support from Kevin. we managed to arrange our one to one sessions around my work schedule which has helped me so much during the course. I thoroughly recommend the course to anyone who is looking to qualify and work in the fitness industry. I am now working as a personal trainer at the 24/7 gym in Norwich. thanks again Kevin.",
          name: "Jay Wall",
          image : 'Images/kelly.jpg'
        },
        {
          review: "I really enjoyed my course with kev and his team they're knowledge is incredible it was really fun very informative, they are all really helpful and friendly!! I run a business full time and this was very flexible and fit in really well around it. The practical workshops are brilliant. Can't fault norfolk health and fitness I will deffo be back for more courses in the future",
          name: "Abz Denney",
          image : 'Images/kelly.jpg'
        },
        {
          review: "Kev taught my Level 2 Gym Instruction and Level 3 Personal Training. He was passionate about fitness and very knowledgeable. His high standards inspired me to work harder. I have since gone on to take a GP Referral Course and Level 4 Cardiac Rehab course. I now run Cardiac rehab classes. There are so many opportunities in the fitness industry, and Kev is the best person you to get you started",
          name: "Susan Bennett",
          image : 'Images/kelly.jpg'
        },
        {
          review: "Really recommend anyone that's interested in becoming a PT to go with Norfolk H&F. Kevin is a fantastic mentor, he is very motivational and helpful! Being someone who has struggled to keep up with my education, I have now two qualifications that'll take me anywhere I'd like within the fitness industry! I'm so pleased to have passed! Definitely a challenge but manageable. You get it done in less than half the time you would take doing it in college!",
          name: "Kelly Salvadore Adams",
          image : 'Images/kelly.jpg'
        },
        {
          review: "With so many choices to learn level 2 gym instructing and level 3 person training online, I had a hunch learning in person would teach me more to prepare myself for the industry, and I wasn't wrong. With NHF, you can attend a workshop every fortnight to learn how to be a PT in a private gym with tutors who have been in the industry for 20+ years! There's always a good vibe in the workshops as you interact with other learners who are just as passionate about fitness and wellbeing. I'm 4 workshops in, I've loved every minute and I've already learnt so much more than I would have done online.",
          name: "Luke Boast",
          image : 'Images/kelly.jpg'
        },
        {
          review: "My experience so far learning L2 Gym instruction and L3 personal training has been great. You can do a lot of learning online admittedly but having the in house Workshops and tutors at hand is just so helpful. Approaching the practical side of this course can be nerve racking but the staff will put you at ease and really want to help you grow in confidence, ready to kickstart your career.Parking and finding the place is easy, plenty of local places to grab a coffee in the well earned breaks during the day. You feel like you have made friends as soon as you walk in on your first day. If you choose distance learning you will still be in great hands with the helpful staff who are quick to respond to any queries and assess your work.",
          name: "Luke Boast",
          image : 'Images/kelly.jpg'
        },
        {
          review: "Completed my PT course with Kevin. Ever since I’ve qualified, I have gone on to work at multiple gyms. I now work as a self employed PT. Best decision I ever made by doing this course in Norwich.",
          name: 'Ben Sell',
          image : 'Images/kelly.jpg'
        },
      ]
    

const testimonialContent = document.querySelector('.testimonial-content')

testimonialContent.innerHTML=testimonialData.map(testimonial =>{
    return `
    <div class="testimonial-reviews">
        <p class='review-content'>${testimonial.review}</p>
        <img class='testimonial-image' src=${testimonial.image} alt="">
        <h4>${testimonial.name}</h4>  
        <p>Qualified with us on: </p>
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