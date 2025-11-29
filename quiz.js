const quizQuestions = [
    { question: "1) What is the capital of India?", answer: "new delhi" },
    { question: "2) How many continents are there?", answer: "7" },
    { question: "3) Which gas do plants release during photosynthesis?", answer: "oxygen" },
    { question: "4) What is the smallest prime number?", answer: "2" },
    { question: "5) Which instrument is used to measure temperature?", answer: "thermometer" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! Correct answer: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Over! Final Score: " + score + " / " + quizQuestions.length);
}

runQuiz();