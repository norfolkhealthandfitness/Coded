const tutorDatabase = [
    {
        img: 'Images/kevin.jpg',
        Name: 'Kevin Mantle',
        Role: 'TUTOR AND ASSESSOR',
        Bio: `
            <p>
            Kevin never looked back from the journey he’s undergone within the fitness industry. 
            <br><br>
            Kevin started out as a Lifeguard and a Gym Instructor at the age of 17 in a corporate health club in Norwich. Kevin then progressed as a freelance personal trainer and group exercise class instructor. 
            <br><br>
            He later worked as a self-employed personal trainer across various gyms in Norwich. 
            <br><br>
            It wasn’t until 2010 he got his first opportunity to start teaching fitness courses. After graduating from Anglia Ruskin, Kevin worked as a teacher and a sport scientist within professional football. He worked with clubs such as Peterborough United and Norwich City F.C.
            <br><br>
            After delivering fitness courses in Dubai, Kevin identified the need for quality fitness education in Norfolk and the UAE. “I decided to create Norfolk Health & Fitness as a way of providing affordable access to quality fitness qualifications”.
            <br><br>
            Kevin has now partnered with Active IQ and a team of experienced and passionate tutors. This has allowed him to certify students from various backgrounds and learning requirements.
            <br><br>
            Kevin has now qualified over 600 personal trainers in the UK 🇬🇧 and Dubai 🇦🇪.
            </p>
        `
    },
    {
        img: 'Images/Damion.jpg',
        Name: 'Damion Vincent',
        Role: 'TUTOR AND ASSESSOR',
        Bio: `
             <p>
            Damion Vincent has vast experience in the health and fitness industry. His experience spans over 12 years. 
            <br><br>
            He has a strong desire for sports and fitness biomechanics. This allows him to use his skills to enhance the lives of all my passionate clients he encounters. As lead practitioner for health and sports at Norfolk Community Learning, he’s been a tutor in a range of courses. Courses such as personal training, kettlebells and much more. 
            <br><br>
            He specialises in different sports such as American football, football and tennis. These specialisations allow him to make sessions exciting and dynamic. His sessions help to improve motor skills and cognitive thought. This all helps in the process towards exercise as well as your direct goals and desires for your body and mind. 
            </p>
             `
    },
    {
        img: 'Images/Ian.jpg',
        Name: 'Ian Rickett',
        Role: 'TUTOR AND ASSESSOR',
        Bio: `
        <p>I started working as a personal trainer 2019 whilst completing my degree in sport fitness and coaching with the open university. I worked at Fitness @ The Street, a gym in my village where I live.</p>
        <br> 
        <p>In 2021 I decided to qualify as a strength and conditioning coach with Norfolk Health and Fitness as I have a keen interest in supporting athletes. I was fortunate to work with two players from Norwich United football club, and for the 2022-2023 season was appointed as the club’s strength and conditioning coach. I oversaw the club’s strength and conditioning programme. Through the preseason I supported the players in developing their fitness in preparation for the season ahead. </p>
        <br> 
        <p> In September 2022 I was offered the role of fitness and performance coach at Queen Mary University London. I am involved with gym floor services including gym classes, programming and inductions. I oversee the universities strength and conditioning programme which supports a variety of athletes from university club sport and the university talented athlete programme. 
        <br> 
        <p>I am currently completing a master’s degree in strength and conditioning with St Mary’s University Twickenham.</p>
             `
    },
    {
        img: 'Images/Matt.jpg',
        Name: 'Matt Fever',
        Role: 'TUTOR AND ASSESSOR',
        Bio: `
            <p>
            Matt has been coaching in Norwich since 2001. During this time, he has been involved with one of the largest health clubs in the area for over 16 years, working with a range of clients from complete beginner to professional athlete.
            <br><br>
            Throughout this period, he has accumulated countless hours of hands on practical coaching experience, experience that can only truly be obtained through spending so many hours on the gym floor. However, it is this time and experience that enables him to deliver the very best guidance to you.
            <br><br>
            Matt first began his journey into fitness at the age of 7 when he entered his first martial arts class. Since then, he has managed to earn a 4th degree black belt and have had the opportunity to train and coach in the United States, Australia and Europe.
            <br><br>
            In addition to this he has continued to study and work with some of the best coaches in the country, attending regular courses in weightlifting, martial arts, and nutrition, constantly aiming to continue his development within the fitness industry, whilst passing this knowledge on to others.
            <br><br>
            Over recent years he has worked not only as a personal trainer but also as an exercise referral consultant, working alongside GP’s, Physiotherapists, an educational course tutor and an NVQ training assessor.
            </p>
    
             `
    },
    {
        img: 'Images/Leah.jpg',
        Name: 'Leah High',
        Role: 'Internal Verifier',
        Bio: `
            <p>
            Leah, a former external verifier for Active IQ, now works with Norfolk Health & Fitness. Leah liaises with the awarding organisations. This ensures compliance to deliver many qualifications at Norfolk Health & Fitness. 
            <br><br>
            Her role is to standardise across the assessor and tutor team, manage CPD. This means she can ensure that we have a high standard of internal verifying, within NHF. 
            <br><br>
            Leah has also helped secure Direct Claim Status for NHF since Jan 2017.
            </p>
             `
    },
];

const insertTutorInfo = document.querySelectorAll('.inject-tutor-info')

tutorDatabase.forEach(tutor => {
    const tutorHTML = `
        <div class="tutor-grid">
            <div class="tutor-info">
                <div class="tutor-img">
                    <img src="${tutor.img}" alt="">
                </div>
                <div class="tutorinfotext">   
                    <h3>${tutor.Name}</h3>
                    <h4>${tutor.Role}</h4>
                </div>
            </div>
            <div class="tutor-text">${tutor.Bio} </div>
        </div>
    `;

    insertTutorInfo.forEach(element => {
        element.innerHTML += tutorHTML;
    });
});






