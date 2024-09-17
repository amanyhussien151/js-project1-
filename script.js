
function Question(question,answer)
{
     this.question=question;
     this.answer=answer;    
}
var questions = [
    { question: "What is my name?", answer: "amany" },
    { question: "How many programming languages?", answer: "2000" },
    { question: "How many letters are there in the Arabic language?", answer: "28" },
    { question: "How many letters are there in the English language?", answer: "25" },
    { question: "What is the programming language used in web development?", answer: "JavaScript" },
    { question: "In which college do I study?", answer: "fcis" },
    { question: "What is the capital of france?", answer: "Paris" },
    { question: "What was my grade in high school?", answer: "80%" },
    { question: "What is the capital of Egypt?", answer: "cairo" },
    { question: "How many continents are there in the world?", answer: "7" }
];

// اختيار 5 أسئلة عشوائية
function getRandomQuestions(questions, count) {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// عرض الأسئلة في الصفحة
function displayQuestions() {
    const randomQuestions = getRandomQuestions(questions, 5);
    const exam = document.getElementById('exam');
    
    randomQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <input type="text" id="answer${index}" data-answer="${q.answer}">
        `;
        exam.appendChild(questionDiv);
    });
}

// حساب الإجابات
function get_result() {
    let correctAnswers = 0;
    let totalQuestions = 5;

    for (let i = 0; i < totalQuestions; i++) {
        const userAnswer = document.getElementById(`answer${i}`).value.toLowerCase().trim();
        const correctAnswer = document.getElementById(`answer${i}`).getAttribute('data-answer').toLowerCase().trim();
        
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
    }

    var incorrectAnswers = totalQuestions - correctAnswers;
    var scorePercentage = (correctAnswers / totalQuestions) * 100;

    var resultMessage = scorePercentage;
    if (scorePercentage > 50){
        console.log("ناجح" );

    }else
    {
        console.log( "راسب");
    };
    
    //عرض النتيجة
    document.getElementById('result').innerHTML = `
        <p> الإجابات الصحيحة: ${correctAnswers}</p>
        <p> الإجابات الخاطئة: ${incorrectAnswers}</p>
        <p>النسبة: ${scorePercentage}%</p>
        <h2> ${resultMessage}</h2>
    `;
}

window.onload = displayQuestions;
