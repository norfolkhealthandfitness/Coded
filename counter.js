const counterElement = document.querySelectorAll('.numberCounter');
let currentValue = 250; // start value
const maxValue = 500; // end value

const interval = setInterval(() => {
    currentValue += 1; // increment by 1, you can adjust this for different speeds
    counterElement.textContent = currentValue + '+';

    if (currentValue >= maxValue) {
        clearInterval(interval); // stop the counter when it reaches 500
    }
}, 10);