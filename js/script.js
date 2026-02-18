function generateAnswer() {
    let question = document.getElementById("question").value;
    let responseBox = document.getElementById("response");

    if (question.trim() === "") {
        responseBox.innerHTML = "Please enter a question.";
    } else {
        responseBox.innerHTML = "AI is thinking... (Dummy response for now)";
    }
}
