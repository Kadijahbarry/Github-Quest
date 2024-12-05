// Function to show the next step and hide the current one
function nextStep(stepId) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.classList.add('hidden');
    });

    // Show the next step
    const nextStep = document.getElementById(stepId);
    nextStep.classList.remove('hidden');
}

// Function to handle certificate submission (can be customized)
function submitCertificate() {
    const certificateInput = document.getElementById('certificateInputField').value;
    
    // Check if the input is correct (you can change the logic to match your needs)
    if (certificateInput.toLowerCase() === "github completion") {
        alert("Congratulations! You've completed the quest!");
    } else {
        alert("Oops! That doesn't look right. Try again.");
    }
}



