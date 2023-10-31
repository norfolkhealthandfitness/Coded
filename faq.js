const accordions = document.getElementsByClassName('accordion');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        const content = this.querySelector('.accordion-content');
        
        // Toggle the content display
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }

        // Toggle the active class for the border
        this.classList.toggle('accordion-item-active');
    });
}
