const counterElements = document.querySelectorAll('.numberCounter'); // Selects all elements with the class "numberCounter"
const duration = 7000; // Duration for counters to finish in milliseconds
const refreshRate = 10; // How often to update the counter in milliseconds

counterElements.forEach((counterElement) => {
  const maxValue = parseInt(counterElement.dataset.maxValue, 10); // end value for this counter
  const suffix = counterElement.dataset.suffix; // suffix for the counter
  const increment = maxValue * refreshRate / duration; // Calculate increment per refresh

  let currentValue = 0; // start value for this counter

  const interval = setInterval(() => {
    currentValue += increment; // Increment the counter based on calculated increment
    if (currentValue >= maxValue) {
      clearInterval(interval); // Stop the counter when it reaches the max value
      currentValue = maxValue; // Fix to the exact max value
    }
    counterElement.textContent = Math.floor(currentValue) + suffix; // Update text with suffix
  }, refreshRate);
});
