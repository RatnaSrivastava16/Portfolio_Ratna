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
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  cursorCircle.style.left = e.clientX + "px";
  cursorCircle.style.top = e.clientY + "px";
});
function setActive(button) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function showLeetcode(button) {

  setActive(button);

  document.getElementById("solvedCount").innerText = "491+";

  document.getElementById("donutChart").style.background =
    "conic-gradient(#ffa31a 0deg 300deg, #1f2937 300deg 360deg)";

  document.getElementById("statsContainer").innerHTML = `
  
    <div class="stat-card">
      <p>LEETCODE RANK</p>
      <h3>2,06,462</h3>
    </div>

    <div class="stat-card">
      <p>CONTEST RATING</p>
      <h3>1411</h3>
    </div>

    <div class="stat-card">
      <p>ACCEPTANCE</p>
      <h3>69.16%</h3>
    </div>

    <div class="stat-card">
      <p>ACTIVE DAYS</p>
      <h3>232</h3>
    </div>

  `;
}

function showGFG(button) {

  setActive(button);

  document.getElementById("solvedCount").innerText = "247";

  document.getElementById("donutChart").style.background =
    "conic-gradient(#22c55e 0deg 220deg, #1f2937 220deg 360deg)";

  document.getElementById("statsContainer").innerHTML = `
  
    <div class="stat-card">
      <p>CODING SCORE</p>
      <h3>735</h3>
    </div>

    <div class="stat-card">
      <p>PROBLEMS SOLVED</p>
      <h3>247</h3>
    </div>

    <div class="stat-card">
      <p>INSTITUTE RANK</p>
      <h3>1673</h3>
    </div>

    <div class="stat-card">
      <p>POTD SOLVED</p>
      <h3>7</h3>
    </div>

  `;
}
let luckyNumber = Math.floor(Math.random() * 5) + 1;
function checkGuess() {
  const userGuess = document.getElementById("guessInput").value;
  const message = document.getElementById("gameMessage");

  if (userGuess == luckyNumber) {
    message.innerText = "Correct! Portfolio unlocked 🎉";
    message.style.color = "#00ffd5";

    setTimeout(() => {
      document.getElementById("unlock-game").style.display = "none";
      document.getElementById("portfolioContent").style.display = "block";
    }, 800);
  } else {
    message.innerText = "Oops! Try again 😉";
    message.style.color = "#ff4d4d";
  }
}

loadQuestion();
