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
                text: "You are the leader of this quest and will be taking the first steps to making the website!\nStep 1: Create a Repository on GitHub.\nGo to GitHub, click the '+' button near the search bar, select 'New Repository.'\nMake it public, name it, and add a README. Add your teammates by clicking Add Collaborators, then adding the username of your team. Don't forget to give them an admin role in the repository.",
                code: "",
            },
            {
                text: "Step 2: Create a file named `script.js` (this is important, you will see later). Copy the code below into the file. This will be the JavaScript needed for this code. This is what makes the app interactive and more lively.",
                code: "console.log('Hello from JavaScript!');",
            },
            {
                text: "Oh no! Everyone has made mistakes in their code!\nStep 3: Help fix each other's code. While it might be easier to go into your partner's file and change it, it quickly gets messy and disorganized. Good thing GitHub has the push and pull features. Let me teach you!\n1) Clone the repo and ensure it's up to date.\n2) Create a new branch.\n3) Edit the file and fix the mistake.\n4) Stage the changes.",
                code: "<!DOCTYPE html><html><head><title>Oops</title></head><body><h1>Fix me!</h1></body></html>",
            },
            {
                text: "Heyyyyyy, how’s it going? Wanna know some facts? Of course you do!\nFun Fact 1: This event is run by SWE (Society of Women Engineers), and we have events all the time. You should come!\nFun Fact 2: GitHub was founded in April 2008.\nFun Fact 3: GitHub HQ is in San Francisco.",
                code: "",
            },
            {
                text: "Deploy the website. Go to Settings ⇒ Pages ⇒ Branch, set the branch to 'main,' and the folder to 'root,' then save. You have to wait a few seconds for the website to complete. You will see it on the code page.",
                code: "",
            },
        ],
        B: [
            {
                text: "You will be in charge of the HTML file, the backbone of the website, but first you have to get into the repository. Wait for Person A to make the repository, and you will receive the invite in your GitHub notifications. Click the button below once you are in. While you wait, fun fact: The GitHub service was developed by Chris Wanstrath, P. J. Hyett, Tom Preston-Werner, and Scott Chacon using Ruby on Rails.",
                code: "",
            },
            {
                text: "Step 1: Create a file named index.html (this is important, you will see why). Copy the code below. This is the HTML code needed for this file to work. Click the button below when done.",
                code: "",
            },
            {
                text: "Oh no! Everyone has made mistakes in their code!\nStep 3: Help fix each other's code. While it might be easier to go into your partner's file and change it, it quickly gets messy and disorganized. Good thing GitHub has the push and pull features. Let me teach you!\n1) Clone the repo and ensure it's up to date.\n2) Create a new branch.\n3) Edit the file and fix the mistake.\n4) Stage the changes.",
                code: "",
            },
            {
                text: "Secret quest! Quickly, before your team deploys the website, go into the HTML file! Change blank 1 with 'Congratulations!' Change blank 2 with 'Your team has earned a Certificate in GitHub!' I’ll distract them! Hurry!",
                code: "",
            },
        ],
        C: [
            {
                text: "Role: You're the artist of the group! CSS – You style the website (you make it fun!). But first, you have to get in the repository. Wait for Person A to make the repository, and you will receive the invite in your GitHub notifications. Click the button below once you are in. While you wait, fun fact: There were more than 310 million public and open-source contributions on GitHub, and almost 100 million new projects were started.",
                code: "",
            },
            {
                text: "Step 1: Create a file named ‘style.css’ (this is important, you will see why). Copy the code below. This is the CSS code needed for this webpage to look nice. I know it’s a lot.",
                code: "",
            },
            {
                text: "Oh no! Everyone has made mistakes in their code!\nStep 3: Help fix each other's code. While it might be easier to go into your partner's file and change it, it quickly gets messy and disorganized. Good thing GitHub has the push and pull features. Let me teach you!\n1) Clone the repo and ensure it's up to date.\n2) Create a new branch.\n3) Edit the file and fix the mistake.\n4) Stage the changes.",
                code: "body {\n  background-color: #1e1e1e;\n  color: #ffffff;\n}",
            },
            {
                text: "Heyyyyyy, how’s it going? Wanna know some facts? Of course you do!\nFun fact: This event is run by SWE (Society of Women Engineers), and we have events all the time. You should come!\nFun Fact 2: GitHub was founded in April 2008.\nFun Fact 3: GitHub HQ is in San Francisco.",
                code: "",
            },
            {
                text: "Step 4: Deploy the website. Go to Settings ⇒ Pages ⇒ Branch, set the branch to 'main,' and the folder to 'root,' then save. You have to wait a few seconds for the website to complete. You will see it on the code page.",
                code: "",
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



