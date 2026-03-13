const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/ask", (req, res) => {
    const question = req.body.question;

    res.json({
        answer: "Backend received your question: " + question
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});