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
