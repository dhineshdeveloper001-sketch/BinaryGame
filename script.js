// script.js

// Logic Gate Definitions & SVGs
const gateData = {
    AND: {
        name: "AND Gate",
        svg: `<svg viewBox="0 0 100 100"><path d="M 30 20 L 50 20 A 30 30 0 0 1 50 80 L 30 80 Z" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="35" x2="30" y2="35" stroke="currentColor" stroke-width="4"/><line x1="10" y1="65" x2="30" y2="65" stroke="currentColor" stroke-width="4"/><line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="4"/></svg>`,
        description: "Outputs 1 only if BOTH inputs are 1.",
        evaluate: (a, b) => a & b,
        truthTable: [[0,0,0], [0,1,0], [1,0,0], [1,1,1]],
        inputs: 2
    },
    OR: {
        name: "OR Gate",
        svg: `<svg viewBox="0 0 100 100"><path d="M 30 20 C 50 20 70 35 80 50 C 70 65 50 80 30 80 C 45 65 45 35 30 20" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="35" x2="38" y2="35" stroke="currentColor" stroke-width="4"/><line x1="10" y1="65" x2="38" y2="65" stroke="currentColor" stroke-width="4"/><line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="4"/></svg>`,
        description: "Outputs 1 if AT LEAST ONE input is 1.",
        evaluate: (a, b) => a | b,
        truthTable: [[0,0,0], [0,1,1], [1,0,1], [1,1,1]],
        inputs: 2
    },
    NOT: {
        name: "NOT Gate",
        svg: `<svg viewBox="0 0 100 100"><polygon points="30,20 30,80 70,50" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="75" cy="50" r="5" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="50" x2="30" y2="50" stroke="currentColor" stroke-width="4"/><line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="4"/></svg>`,
        description: "Inverts the input (1 becomes 0, 0 becomes 1).",
        evaluate: (a) => a === 1 ? 0 : 1,
        truthTable: [[0, 1], [1, 0]],
        inputs: 1
    },
    NAND: {
        name: "NAND Gate",
        svg: `<svg viewBox="0 0 100 100"><path d="M 30 20 L 50 20 A 30 30 0 0 1 50 80 L 30 80 Z" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="85" cy="50" r="5" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="35" x2="30" y2="35" stroke="currentColor" stroke-width="4"/><line x1="10" y1="65" x2="30" y2="65" stroke="currentColor" stroke-width="4"/><line x1="90" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="4"/></svg>`,
        description: "Opposite of AND. Outputs 0 only if BOTH inputs are 1.",
        evaluate: (a, b) => (a & b) === 1 ? 0 : 1,
        truthTable: [[0,0,1], [0,1,1], [1,0,1], [1,1,0]],
        inputs: 2
    },
    NOR: {
        name: "NOR Gate",
        svg: `<svg viewBox="0 0 100 100"><path d="M 30 20 C 50 20 70 35 80 50 C 70 65 50 80 30 80 C 45 65 45 35 30 20" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="85" cy="50" r="5" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="35" x2="38" y2="35" stroke="currentColor" stroke-width="4"/><line x1="10" y1="65" x2="38" y2="65" stroke="currentColor" stroke-width="4"/><line x1="90" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="4"/></svg>`,
        description: "Opposite of OR. Outputs 1 only if BOTH inputs are 0.",
        evaluate: (a, b) => (a | b) === 1 ? 0 : 1,
        truthTable: [[0,0,1], [0,1,0], [1,0,0], [1,1,0]],
        inputs: 2
    },
    XOR: {
        name: "XOR Gate",
        svg: `<svg viewBox="0 0 100 100"><path d="M 20 20 C 35 35 35 65 20 80" fill="none" stroke="currentColor" stroke-width="4"/><path d="M 30 20 C 50 20 70 35 80 50 C 70 65 50 80 30 80 C 45 65 45 35 30 20" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="35" x2="26" y2="35" stroke="currentColor" stroke-width="4"/><line x1="10" y1="65" x2="26" y2="65" stroke="currentColor" stroke-width="4"/><line x1="80" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="4"/></svg>`,
        description: "Outputs 1 if inputs are DIFFERENT.",
        evaluate: (a, b) => a !== b ? 1 : 0,
        truthTable: [[0,0,0], [0,1,1], [1,0,1], [1,1,0]],
        inputs: 2
    },
    XNOR: {
        name: "XNOR Gate",
        svg: `<svg viewBox="0 0 100 100"><path d="M 20 20 C 35 35 35 65 20 80" fill="none" stroke="currentColor" stroke-width="4"/><path d="M 30 20 C 50 20 70 35 80 50 C 70 65 50 80 30 80 C 45 65 45 35 30 20" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="85" cy="50" r="5" fill="none" stroke="currentColor" stroke-width="4"/><line x1="10" y1="35" x2="26" y2="35" stroke="currentColor" stroke-width="4"/><line x1="10" y1="65" x2="26" y2="65" stroke="currentColor" stroke-width="4"/><line x1="90" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="4"/></svg>`,
        description: "Outputs 1 if inputs are the SAME.",
        evaluate: (a, b) => a === b ? 1 : 0,
        truthTable: [[0,0,1], [0,1,0], [1,0,0], [1,1,1]],
        inputs: 2
    }
};

// Game Levels
const levels = [
    { gate: 'AND', a: 1, b: 0, desc: "Find the output of an AND gate." },
    { gate: 'OR', a: 0, b: 1, desc: "Find the output of an OR gate." },
    { gate: 'NOT', a: 1, b: null, desc: "Use a NOT gate to find the output." },
    { gate: 'NAND', a: 1, b: 1, desc: "AND + NOT equivalent. What is the output?" },
    { gate: 'XOR', a: 1, b: 0, desc: "Find the output of an XOR gate." },
    { gate: 'NAND', a: 0, b: 1, desc: "Find the output of a NAND gate." },
    { gate: 'NOR', a: 0, b: 0, desc: "Find the output of a NOR gate." },
    { gate: 'XNOR', a: 1, b: 1, desc: "Find the output of an XNOR gate." },
    { gate: 'XOR', a: 1, b: 1, desc: "Mixed challenge: XOR with identical inputs." },
    { gate: 'AND', a: 1, b: 1, desc: "Final challenge: AND gate with both inputs ON." }
];

// State Variables
let currentLevelIndex = 0;
let score = 0;
let answered = false;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    updateHighScoreDisplay();
    generateLearnSection();
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showHome() {
    updateHighScoreDisplay();
    showScreen('home-section');
}

function showLearnSection() {
    showScreen('learn-section');
}

function startGame() {
    currentLevelIndex = 0;
    score = 0;
    loadLevel();
    showScreen('game-section');
}

function restartGame() {
    startGame();
}

function loadLevel() {
    answered = false;
    const level = levels[currentLevelIndex];
    const gateInfo = gateData[level.gate];

    // Update UI text
    document.getElementById('current-level').innerText = currentLevelIndex + 1;
    document.getElementById('current-score').innerText = score;
    document.getElementById('level-description').innerText = level.desc;
    
    // Update progress bar
    const progress = (currentLevelIndex / levels.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";

    // Set Inputs
    document.getElementById('input-a').innerText = level.a;
    
    const inputBContainer = document.getElementById('input-b-container');
    if (gateInfo.inputs === 1) {
        inputBContainer.style.display = 'none';
    } else {
        inputBContainer.style.display = 'flex';
        document.getElementById('input-b').innerText = level.b;
    }

    // Set Gate Symbol
    const gateDisplay = document.getElementById('current-gate-display');
    gateDisplay.innerHTML = gateInfo.svg;
    gateDisplay.title = gateInfo.name;

    // Reset UI states
    const feedback = document.getElementById('feedback-message');
    feedback.classList.add('hidden');
    feedback.className = 'feedback hidden'; // reset classes

    document.getElementById('next-level-btn').classList.add('hidden');
    
    // Reset output buttons
    document.querySelectorAll('.output-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.backgroundColor = ''; // Reset to default CSS
    });
}

function checkAnswer(userChoice) {
    if (answered) return;
    answered = true;

    const level = levels[currentLevelIndex];
    const gateInfo = gateData[level.gate];
    const correctAnswer = gateInfo.evaluate(level.a, level.b);

    const feedback = document.getElementById('feedback-message');
    feedback.classList.remove('hidden');

    const selectedBtn = document.getElementById(`btn-out-${userChoice}`);

    if (userChoice === correctAnswer) {
        score += 10;
        document.getElementById('current-score').innerText = score;
        feedback.innerText = "Correct!";
        feedback.classList.add('correct');
        selectedBtn.style.backgroundColor = 'var(--success-color)';
    } else {
        feedback.innerText = `Try Again! The correct answer was ${correctAnswer}.`;
        feedback.classList.add('wrong');
        selectedBtn.style.backgroundColor = 'var(--danger-color)';
        document.getElementById(`btn-out-${correctAnswer}`).style.backgroundColor = 'var(--success-color)';
    }

    // Disable output buttons
    document.querySelectorAll('.output-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Show Next Level button or finish
    document.getElementById('next-level-btn').classList.remove('hidden');
    if (currentLevelIndex === levels.length - 1) {
        document.getElementById('next-level-btn').innerText = "Finish Game";
    } else {
        document.getElementById('next-level-btn').innerText = "Next Level";
    }
}

function nextLevel() {
    if (currentLevelIndex < levels.length - 1) {
        currentLevelIndex++;
        loadLevel();
    } else {
        endGame();
    }
}

function endGame() {
    showScreen('results-section');
    document.getElementById('final-score').innerText = score;
    
    const highScore = localStorage.getItem('binaryGameHighScore') || 0;
    const newScoreMsg = document.getElementById('new-highscore-msg');
    
    if (score > highScore) {
        localStorage.setItem('binaryGameHighScore', score);
        newScoreMsg.classList.remove('hidden');
    } else {
        newScoreMsg.classList.add('hidden');
    }
}

function updateHighScoreDisplay() {
    const highScore = localStorage.getItem('binaryGameHighScore') || 0;
    document.getElementById('home-high-score').innerText = highScore;
}

// Generate Learn Section Cards
function generateLearnSection() {
    const container = document.getElementById('gates-container');
    container.innerHTML = ''; // clear

    for (const [key, data] of Object.entries(gateData)) {
        const card = document.createElement('div');
        card.className = 'gate-card';

        // Table generation
        let tableHTML = `<table class="truth-table">
            <thead>
                <tr>
                    <th>A</th>
                    ${data.inputs === 2 ? '<th>B</th>' : ''}
                    <th>Out</th>
                </tr>
            </thead>
            <tbody>`;
        
        data.truthTable.forEach(row => {
            tableHTML += '<tr>';
            row.forEach(val => {
                tableHTML += `<td>${val}</td>`;
            });
            tableHTML += '</tr>';
        });
        
        tableHTML += `</tbody></table>`;

        card.innerHTML = `
            <h3>${data.name}</h3>
            <div class="gate-symbol">${data.svg}</div>
            <p class="gate-description">${data.description}</p>
            ${tableHTML}
        `;
        container.appendChild(card);
    }
}
