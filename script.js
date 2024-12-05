document.addEventListener("DOMContentLoaded", () => {
    const startButtonA = document.getElementById("startButtonA");
    const startButtonB = document.getElementById("startButtonB");
    const startButtonC = document.getElementById("startButtonC");

    const personA = document.getElementById("personA");
    const personB = document.getElementById("personB");
    const personC = document.getElementById("personC");

    // Show Person A's Task
    startButtonA.addEventListener("click", () => {
        personA.classList.remove("hidden");
        startButtonA.style.display = "none";
    });

    // Show Person B's Task
    startButtonB.addEventListener("click", () => {
        personB.classList.remove("hidden");
        startButtonB.style.display = "none";
    });

    // Show Person C's Task
    startButtonC.addEventListener("click", () => {
        personC.classList.remove("hidden");
        startButtonC.style.display = "none";
    });

    // Handle Button Clicks
    document.getElementById("doneA").addEventListener("click", () => {
        alert("Repository created! Let's move to the next step.");
    });
    document.getElementById("doneA2").addEventListener("click", () => {
        alert("Script file created! Now let's fix the code.");
    });
    document.getElementById("doneA3").addEventListener("click", () => {
        alert("Code fixed! Move to the next step.");
    });
    document.getElementById("doneA4").addEventListener("click", () => {
        alert("Fun facts received! Moving on...");
    });
    document.getElementById("doneA5").addEventListener("click", () => {
        alert("Website deployed! Congratulations!");
    });

    document.getElementById("doneB").addEventListener("click", () => {
        alert("HTML file created! Moving to the next task.");
    });

    document.getElementById("doneB2").addEventListener("click", () => {
        alert("Fixing code! Great work.");
    });

    document.getElementById("doneB3").addEventListener("click", () => {
        alert("Secret quest completed!");
    });

    document.getElementById("doneC").addEventListener("click", () => {
        alert("CSS file created! Time to fix errors.");
    });

    document.getElementById("doneC2").addEventListener("click", () => {
        alert("Fixing code! Keep going.");
    });

    document.getElementById("doneC3").addEventListener("click", () => {
        alert("Fun facts received!");
    });

    document.getElementById("doneC4").addEventListener("click", () => {
        alert("Website deployed! You did it!");
    });
});

