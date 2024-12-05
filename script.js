document.addEventListener("DOMContentLoaded", () => {
    const roleA = document.getElementById("roleA");
    const roleB = document.getElementById("roleB");
    const roleC = document.getElementById("roleC");
    const instructionContainer = document.getElementById("instructionContainer");
    const instructionText = document.getElementById("instructionText");
    const codeSnippet = document.getElementById("codeSnippet");
    const certificateInput = document.getElementById("certificateInput");
    const actionButton = document.getElementById("actionButton");

    let currentRole = "";
    let taskStep = 0;

    const tasks = {
        A: [
            {
                text: "Step 1: Create a Repository on GitHub.\nGo to GitHub, click the '+' button near the search bar, select 'New Repository.'\nMake it public, name it, add a README, and invite teammates.",
                code: "",
            },
            {
                text: "Step 2: Create the JavaScript file.\nCopy the code below into a file called `script.js`.",
                code: `console.log("Hello from JavaScript!");`,
            },
            {
                text: "Oh no! Fix Person B's HTML code.",
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

    const finalStep = {
        text: "Final Step: Enter the certificate HTML code you worked on earlier into the box below. This will be used in your HTML file. Once you're done, deploy the website using GitHub Pages!",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate</title>
</head>
<body>
    <h1>Congratulations!</h1>
    <p>Your team has completed CodeQuest and earned this certificate.</p>
</body>
</html>`,
    };

    const deploymentInstructions = `
        Deployment Instructions:
        1. Go to your repository on GitHub.
        2. Click on the "Settings" tab.
        3. Scroll down to "GitHub Pages."
        4. Under "Source," select the branch (usually 'main') and click "Save."
        5. Your website will be live at the provided GitHub Pages link!
    `;

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
        if (taskStep === tasks[currentRole].length) {
            // Show the final certificate step for everyone
            showFinalStep();
            return;
        }

        const task = tasks[currentRole][taskStep];
        instructionText.textContent = task.text;
        instructionContainer.classList.remove("hidden");

        if (task.code) {
            codeSnippet.textContent = task.code;
            codeSnippet.classList.remove("hidden");
        } else {
            codeSnippet.classList.add("hidden");
        }

        certificateInput.classList.add("hidden");
        actionButton.textContent = "Done";
        actionButton.classList.remove("hidden");
    }

    function showFinalStep() {
        instructionText.textContent = finalStep.text;
        codeSnippet.textContent = finalStep.code;
        codeSnippet.classList.remove("hidden");
        certificateInput.classList.remove("hidden");
        actionButton.textContent = "Submit";
        actionButton.onclick = () => {
            instructionContainer.innerHTML = `
                <p class="pixel-text">Mission Complete! Great job, team!</p>
                <pre>${deploymentInstructions}</pre>
            `;
        };
    }

    actionButton.addEventListener("click", () => {
        taskStep++;
        showTask();
    });
});
