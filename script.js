document.addEventListener("DOMContentLoaded", () => {
    // Start Buttons
    document.getElementById("startButtonA").addEventListener("click", () => {
        document.getElementById("personA").classList.remove("hidden");
    });

    document.getElementById("startButtonB").addEventListener("click", () => {
        document.getElementById("personB").classList.remove("hidden");
    });

    document.getElementById("startButtonC").addEventListener("click", () => {
        document.getElementById("personC").classList.remove("hidden");
    });

    // Person A Next Buttons
    document.getElementById("nextA1").addEventListener("click", () => {
        document.getElementById("taskA2").classList.remove("hidden");
        document.getElementById("taskA1").classList.add("hidden");
    });

    document.getElementById("nextA2").addEventListener("click", () => {
        document.getElementById("taskA3").classList.remove("hidden");
        document.getElementById("taskA2").classList.add("hidden");
    });

    document.getElementById("nextA3").addEventListener("click", () => {
        document.getElementById("taskA4").classList.remove("hidden");
        document.getElementById("taskA3").classList.add("hidden");
    });

    document.getElementById("nextA4").addEventListener("click", () => {
        document.getElementById("taskA5").classList.remove("hidden");
        document.getElementById("taskA4").classList.add("hidden");
    });

    // Person B Next Buttons
    document.getElementById("inRepoB").addEventListener("click", () => {
        document.getElementById("taskB1").classList.remove("hidden");
    });

    document.getElementById("nextB1").addEventListener("click", () => {
        document.getElementById("taskB2").classList.remove("hidden");
        document.getElementById("taskB1").classList.add("hidden");
    });

    document.getElementById("nextB2").addEventListener("click", () => {
        document.getElementById("taskB3").classList.remove("hidden");
        document.getElementById("taskB2").classList.add("hidden");
    });

    // Person C Next Buttons
    document.getElementById("inRepoC").addEventListener("click", () => {
        document.getElementById("taskC1").classList.remove("hidden");
    });

    document.getElementById("nextC1").addEventListener("click", () => {
        document.getElementById("taskC2").classList.remove("hidden");
        document.getElementById("taskC1").classList.add("hidden");
    });

    document.getElementById("nextC2").addEventListener("click", () => {
        document.getElementById("taskC3").classList.remove("hidden");
        document.getElementById("taskC2").classList.add("hidden");
    });

    document.getElementById("nextC3").addEventListener("click", () => {
        document.getElementById("taskC4").classList.remove("hidden");
        document.getElementById("taskC3").classList.add("hidden");
    });
});


