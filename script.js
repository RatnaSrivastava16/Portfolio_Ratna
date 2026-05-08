const roles = [
  "Web Developer",
  "Android Developer",
  "AI/ML Engineer",
  "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeText() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1200);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 300);
  }
}

typeText();

const quizData = [
  {
    question: "Which language is used for Android native development?",
    options: ["Python", "Kotlin", "PHP", "Ruby"],
    answer: "Kotlin"
  },
  {
    question: "Which library is used for building UI in web development?",
    options: ["React.js", "MongoDB", "Express.js", "MySQL"],
    answer: "React.js"
  },
  {
    question: "Which algorithm is commonly used in recommendation systems?",
    options: ["SVD", "DFS", "BFS", "Bubble Sort"],
    answer: "SVD"
  },
  {
    question: "Which database is used in MERN stack?",
    options: ["MongoDB", "SQLite", "Oracle", "Firebase"],
    answer: "MongoDB"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");

    button.onclick = () => {
      if (option === current.answer) {
        score++;
        button.style.background = "#00ffd5";
        button.style.color = "#070711";
      } else {
        button.style.background = "#ff4d4d";
      }

      scoreEl.textContent = `Score: ${score}/${quizData.length}`;

      const allButtons = document.querySelectorAll(".option-btn");
      allButtons.forEach(btn => btn.disabled = true);
    };

    optionsEl.appendChild(button);
  });

  scoreEl.textContent = `Score: ${score}/${quizData.length}`;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    scoreEl.textContent = `Final Score: ${score}/${quizData.length}`;
  }
}

loadQuestion();