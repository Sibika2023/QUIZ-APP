const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correct: 0
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "H2"],
        correct: 0
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correct: 0
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "7", "10"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
        correct: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResult();
        return;
    }

    const questionData = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    questionData.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('next-button').style.display = 'none';
    document.getElementById('retry-button').style.display = 'none';
}

function selectAnswer(selectedIndex) {
    const questionData = quizData[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;

    const optionsContainer = document.getElementById('options');
    const options = optionsContainer.getElementsByTagName('div');
    
    // Highlight all options
    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = '#f0f0f0';
    }

    // Highlight the selected option
    options[selectedIndex].style.backgroundColor = '#ddd';
    
    if (selectedIndex === questionData.correct) {
        score++;
    }

    document.getElementById('next-button').style.display = 'inline-block';
    if (selectedIndex !== questionData.correct) {
        document.getElementById('retry-button').style.display = 'inline-block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function retryQuestion() {
    const optionsContainer = document.getElementById('options');
    const options = optionsContainer.getElementsByTagName('div');
    
    // Reset the selected option color and retry selection
    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = '#f0f0f0';
    }
    
    // Hide the retry button
    document.getElementById('retry-button').style.display = 'none';
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `${score} out of ${quizData.length}`;
}

window.onload = loadQuestion;
