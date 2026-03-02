function generateAnswer() {
    let question = document.getElementById("question").value;
    let responseBox = document.getElementById("response");

    if (question.trim() === "") {
        responseBox.innerHTML = "Please enter a question.";
    } else {
        responseBox.innerHTML = "AI is thinking...";

        setTimeout(function() {
            responseBox.innerHTML = "This is a dummy AI response for now.";
        }, 1500);
    }
}
function filterCards() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card-link");
    let noResults = document.getElementById("noResults");

    let visibleCount = 0;

    cards.forEach(function(card) {
        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.classList.remove("hidden");
            card.classList.add("visible");
            visibleCount++;
        } else {
            card.classList.remove("visible");
            card.classList.add("hidden");
        }
    });

    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {

    const toggleBtn = document.getElementById("themeToggle");

    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️";
        } else {
            toggleBtn.textContent = "🌙";
        }
    });

});
function markComplete(id) {
    localStorage.setItem(id, "completed");
    updateCompletionUI();
}

function updateCompletionUI() {
    document.querySelectorAll(".card").forEach(card => {
        let cardId = card.id;

        if (localStorage.getItem(cardId) === "completed") {
            card.classList.add("completed");
        }
    });

    updateProgress();
}
function updateProgress() {
    let cards = document.querySelectorAll(".card");
    let total = cards.length;
    let completed = 0;

    cards.forEach(card => {
        if (card.classList.contains("completed")) {
            completed++;
        }
    });

    let percent = (completed / total) * 100;

    let progressText = document.getElementById("progressText");
    let progressFill = document.getElementById("progressFill");

    if (progressText && progressFill) {
        progressText.innerText = `Progress: ${completed} / ${total} Topics Completed`;
        progressFill.style.width = percent + "%";
    }
}
document.addEventListener("DOMContentLoaded", updateCompletionUI);