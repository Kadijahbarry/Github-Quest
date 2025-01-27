document.addEventListener("DOMContentLoaded", () => {
    const roleA = document.getElementById("roleA");
    const roleB = document.getElementById("roleB");
    const roleC = document.getElementById("roleC");
    const instructionContainer = document.getElementById("instructionContainer");
    const instructionText = document.getElementById("instructionText");
    const codeSnippet = document.getElementById("codeSnippet");
    const actionButton = document.getElementById("actionButton");

    let currentRole = "";
    let taskStep = 0;

    const tasks = {
        A: [
            {
                text: "You are going to be the leader of this quest and will be the creator of this website.
                    
Step 1: Create a repository on GitHub. Go to GitHub, click the '+' button near the search bar, and select 'New Repository.' Make it public, name it, add a README, then go to Collaborators & Teams. Click Add Collaborators and add the username of your team and give them the admin role.",
            },
            {
                text: "Step 2: Create the JavaScript file.\nCopy the code below into a new file called `script.js`.",
                code: `console.log("Hello from JavaScript!");`,
            },
            {
                text: "Oh no! You all made mistakes. Fix Person B's HTML code.",
                code: "<!DOCTYPE html><html><head><title>Oops</title></head><body><h1>Fix me!</h1></body></html>",
            },
        ],
        B: [
            {
                text: "Step 1: Create the HTML file in the repository.",
                code: `<!DOCTYPE html>\n<html>\n<head>\n<title>GitHub Adventure</title>\n</head>\n<body>\n<h1>Hello World!</h1>\n</body>\n</html>`,
            },
            {
                text: "Oh no! Fix Person C's CSS code.",
                code: "body {\n  color: broken-code;\n}",
            },
        ],
        C: [
            {
                text: "Step 1: Create the CSS file in the repository.",
                code: `body {\n  background-color: #1e1e1e;\n  color: #ffffff;\n}`,
            },
            {
                text: "Oh no! Fix Person A's JavaScript code.",
                code: `console.log("Oops, something's missing!");`,
            },
        ],
    };

    // Handle role selection
    roleA.addEventListener("click", () => startRole("A"));
    roleB.addEventListener("click", () => startRole("B"));
    roleC.addEventListener("click", () => startRole("C"));

    function startRole(role) {
        currentRole = role;
        taskStep = 0;
        showTask();
    }

    function showTask() {
        const task = tasks[currentRole][taskStep];
        instructionText.textContent = task.text;
        instructionContainer.classList.remove("hidden");
        if (task.code) {
            codeSnippet.textContent = task.code;
            codeSnippet.classList.remove("hidden");
        } else {
            codeSnippet.classList.add("hidden");
        }
        actionButton.textContent = taskStep === tasks[currentRole].length - 1 ? "Finish" : "Done";
        actionButton.classList.remove("hidden");
    }

    actionButton.addEventListener("click", () => {
        taskStep++;
        if (taskStep < tasks[currentRole].length) {
            showTask();
        } else {
            instructionContainer.innerHTML = "<p class='pixel-text'>Mission Complete! Great job, team!</p>";
        }
    });
});



