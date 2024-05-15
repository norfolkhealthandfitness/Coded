document.addEventListener('DOMContentLoaded', function() {
    function toggleContent() {
        let monthlyContent = document.getElementById('monthly');
        let yearlyContent = document.getElementById('yearly');
        let toggleSwitch = document.querySelector('.toggle-switch');

        let monthlyDisplay = window.getComputedStyle(monthlyContent).display;

        if (monthlyDisplay === "flex") {
            monthlyContent.style.display = "none";
            yearlyContent.style.display = "flex";
            toggleSwitch.classList.add('active');
        } else {
            monthlyContent.style.display = "flex";
            yearlyContent.style.display = "none";
            toggleSwitch.classList.remove('active');
        }
    }

    // Ensure the function is globally accessible
    window.toggleContent = toggleContent;
});
