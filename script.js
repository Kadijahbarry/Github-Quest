document.addEventListener("DOMContentLoaded", () => {
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const optionC = document.getElementById("optionC");
    const taskContainer = document.getElementById("taskContainer");
    const taskDescription = document.getElementById("taskDescription");
    const nextTask = document.getElementById("nextTask");

    let currentTask = 0;
    const tasks = {
        A: [
            "Your job is to create a repository for the team.",
            "Add B and C as collaborators in the repository.",
            "When you're done, click the button to confirm everyone joined!"
        ],
        B: [
            "Your job is to create the HTML code for the project.",
            "Once you're done, push your changes to the repository.",
            "Coordinate with C to ensure their CSS matches the structure!"
        ],
        C: [
            "Your job is to create the CSS code for the project.",
            "Collaborate with B to make the design pixel-perfect.",
            "Don't forget to pull A's JavaScript updates!"
        ],
        Final: [
            "Oh no! Mistakes were found in the code.",
            "Work as a team to fix bugs, push, and pull updates.",
            "Congratulations! You've completed the activity!"
        ]
    };

    let selectedRole = "";

    // Handle role selection
    optionA.addEventListener("click", () => startTasks("A"));
    optionB.addEventListener("click", () => startTasks("B"));
    optionC.addEventListener("click", () => startTasks("C"));

    function startTasks(role) {
        selectedRole = role;
        currentTask = 0;
        showTask();
        hideOptions();
    }

    function showTask() {
        if (currentTask < tasks[selectedRole].length) {
            taskDescription.textContent = tasks[selectedRole][currentTask];
            taskContainer.classList.remove("hidden");
            nextTask.classList.remove("hidden");
        } else if (currentTask === tasks[selectedRole].length) {
            taskDescription.textContent = tasks.Final[0];
        } else {
            taskDescription.textContent = tasks.Final[2];
            nextTask.classList.add("hidden");
        }
    }

    function hideOptions() {
        optionA.style.display = "none";
        optionB.style.display = "none";
        optionC.style.display = "none";
    }

    // Handle next task button
    nextTask.addEventListener("click", () => {
        currentTask++;
        showTask();
    });
});


