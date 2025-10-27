// Tournament Data
const questions = [
    // Round 1: Life and Beginning of Service (5 questions)
    {
        round: 1,
        roundTitle: "Раунд 1. Жизнь и начало службы",
        roundDescription: "Короткие факты биографии",
        question: "В каком году родился А.О. Шабалин?",
        type: "single",
        points: 1,
        time: 25,
        answers: [
            { text: "1912", correct: false },
            { text: "1914", correct: true },
            { text: "1915", correct: false },
            { text: "1910", correct: false }
        ]
    },
    {
        round: 1,
        roundTitle: "Раунд 1. Жизнь и начало службы",
        roundDescription: "Короткие факты биографии",
        question: "Где находилась его родина — деревня Юдмозеро?",
        type: "single",
        points: 1,
        time: 25,
        answers: [
            { text: "Вологодская губерния", correct: false },
            { text: "Город Архангельск", correct: false },
            { text: "Онежский уезд, Архангельская губерния", correct: true },
            { text: "Мурманская губерния", correct: false }
        ]
    },
    {
        round: 1,
        roundTitle: "Раунд 1. Жизнь и начало службы",
        roundDescription: "Короткие факты биографии",
        question: "Какое образование он получил до флота?",
        type: "single",
        points: 1,
        time: 25,
        answers: [
            { text: "Начальная школа", correct: false },
            { text: "Семилетняя школа", correct: true },
            { text: "Технический техникум", correct: false },
            { text: "Высшее морское училище", correct: false }
        ]
    },
    {
        round: 1,
        roundTitle: "Раунд 1. Жизнь и начало службы",
        roundDescription: "Короткие факты биографии",
        question: "Чем Шабалин занимался до службы во ВМФ?",
        type: "single",
        points: 1,
        time: 25,
        answers: [
            { text: "Лесоруб", correct: false },
            { text: "Слесарь", correct: false },
            { text: "Учитель", correct: false },
            { text: "Работал рыбаком на траулерах", correct: true }
        ]
    },
    {
        round: 1,
        roundTitle: "Раунд 1. Жизнь и начало службы",
        roundDescription: "Короткие факты биографии",
        question: "В каком году он поступил на службу в Военно-Морской Флот?",
        type: "single",
        points: 1,
        time: 25,
        answers: [
            { text: "1933", correct: false },
            { text: "1935", correct: false },
            { text: "1936", correct: true },
            { text: "1938", correct: false }
        ]
    },
    
    // Round 2: Hero of Northern Fleet (5 questions)
    {
        round: 2,
        roundTitle: "Раунд 2. Герой Северного флота",
        roundDescription: "Вопросы с изображениями/картами и про боевой путь",
        question: "Где у катера типа Г-5 располагались торпедные аппараты?",
        type: "single",
        image: "[ИЗОБРАЖЕНИЕ КАТЕРА Г-5]",
        points: 2,
        time: 35,
        answers: [
            { text: "На носовой палубе (бугельные аппараты)", correct: false },
            { text: "В кормовых желобах (жёлобные аппараты)", correct: true },
            { text: "Под палубой в центральном отсеке", correct: false },
            { text: "По одному на каждом борту", correct: false }
        ]
    },
    {
        round: 2,
        roundTitle: "Раунд 2. Герой Северного флота",
        roundDescription: "Вопросы с изображениями/картами и про боевой путь",
        question: "На каком флоте прошла основная часть его боевого пути в ВОВ?",
        type: "single",
        points: 2,
        time: 35,
        answers: [
            { text: "Балтийский", correct: false },
            { text: "Черноморский", correct: false },
            { text: "Тихоокеанский", correct: false },
            { text: "Северный", correct: true }
        ]
    },
    {
        round: 2,
        roundTitle: "Раунд 2. Герой Северного флота",
        roundDescription: "Вопросы с изображениями/картами и про боевой путь",
        question: "Как называется выделенный на карте район, где находится порт Лиинахамари?",
        type: "single",
        image: "[КАРТА РАЙОНА ПЕЧЕНГИ]",
        points: 2,
        time: 35,
        answers: [
            { text: "Колыма", correct: false },
            { text: "Петсамо (Печенга)", correct: true },
            { text: "Кольский залив", correct: false },
            { text: "Полуостров Рыбачий", correct: false }
        ]
    },
    {
        round: 2,
        roundTitle: "Раунд 2. Герой Северного флота",
        roundDescription: "Вопросы с изображениями/картами и про боевой путь",
        question: "В каком звании Шабалин встретил начало Великой Отечественной?",
        type: "single",
        points: 2,
        time: 35,
        answers: [
            { text: "Лейтенант", correct: false },
            { text: "Старший лейтенант", correct: false },
            { text: "Капитан-лейтенант", correct: false },
            { text: "Младший лейтенант", correct: true }
        ]
    },
    {
        round: 2,
        roundTitle: "Раунд 2. Герой Северного флота",
        roundDescription: "Вопросы с изображениями/картами и про боевой путь",
        question: "Когда он получил свою первую «Золотую Звезду» Героя Советского Союза?",
        type: "single",
        points: 2,
        time: 35,
        answers: [
            { text: "22 февраля 1944 года", correct: true },
            { text: "5 ноября 1944 года", correct: false },
            { text: "1 марта 1945 года", correct: false },
            { text: "9 мая 1945 года", correct: false }
        ]
    },
    
    // Round 3: Tactics, Feats and Memory (5 questions)
    {
        round: 3,
        roundTitle: "Раунд 3. Тактика, подвиги и память",
        roundDescription: "Повыше сложность: множественный выбор и соединение",
        question: "Какие награды (кроме «Золотой Звезды») были у Шабалина? Отметьте все верные варианты.",
        type: "multiple",
        points: 3,
        time: 50,
        answers: [
            { text: "Орден Ленина", correct: true },
            { text: "Орден Красного Знамени", correct: true },
            { text: "Орден Отечественной войны (II степени)", correct: true },
            { text: "Орден Мужества", correct: false }
        ]
    },
    {
        round: 3,
        roundTitle: "Раунд 3. Тактика, подвиги и память",
        roundDescription: "Повыше сложность: множественный выбор и соединение",
        question: "Что принесло ему вторую «Золотую Звезду» (05.11.1944)?",
        type: "single",
        points: 3,
        time: 50,
        answers: [
            { text: "Серия ночных атак 1942 года", correct: false },
            { text: "Прорыв и высадка десанта в порт Лиинахамари", correct: true },
            { text: "Штурм Берлина", correct: false },
            { text: "Оборона Одессы", correct: false }
        ]
    },
    {
        round: 3,
        roundTitle: "Раунд 3. Тактика, подвиги и память",
        roundDescription: "Повыше сложность: множественный выбор и соединение",
        question: "Соотнесите дату и событие.",
        type: "matching",
        points: 3,
        time: 60,
        leftItems: [
            { id: "A", text: "12–13.10.1944" },
            { id: "B", text: "22.02.1944" },
            { id: "C", text: "05.11.1944" },
            { id: "D", text: "1943" }
        ],
        rightItems: [
            { id: "1", text: "Серия результативных ночных атак на конвои" },
            { id: "2", text: "Первая «Золотая Звезда»" },
            { id: "3", text: "Вторая «Золотая Звезда»" },
            { id: "4", text: "Ночной штурм порта Лиинахамари" }
        ],
        correctPairs: {
            "A": "4",
            "B": "2",
            "C": "3",
            "D": "1"
        }
    },
    {
        round: 3,
        roundTitle: "Раунд 3. Тактика, подвиги и память",
        roundDescription: "Повыше сложность: множественный выбор и соединение",
        question: "В каких условиях действовали торпедные катера Северного флота? Отметьте все верные варианты.",
        type: "multiple",
        points: 3,
        time: 50,
        answers: [
            { text: "Ледяные воды", correct: true },
            { text: "Полярная ночь", correct: true },
            { text: "Частые штормы", correct: true },
            { text: "Тёплые южные моря", correct: false }
        ]
    },
    {
        round: 3,
        roundTitle: "Раунд 3. Тактика, подвиги и память",
        roundDescription: "Повыше сложность: множественный выбор и соединение",
        question: "Определите тип корабля на фото.",
        type: "single",
        image: "[ФОТО БДК «АЛЕКСАНДР ШАБАЛИН»]",
        points: 3,
        time: 50,
        answers: [
            { text: "Корвет пр. 20380", correct: false },
            { text: "Тральщик пр. 1265", correct: false },
            { text: "Ледокол пр. 21900", correct: false },
            { text: "Большой десантный корабль пр. 775 («Александр Шабалин»)", correct: true }
        ]
    }
];

// State Management
let currentQuestionIndex = 0;
let score = 0;
let roundScores = [0, 0, 0];
let timer = null;
let timeLeft = 0;
let teamData = {};
let selectedAnswers = [];
let matchingPairs = {};

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Registration Form Handler
document.getElementById('teamForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    teamData = {
        school: document.getElementById('schoolName').value,
        class: document.getElementById('classNumber').value,
        parallel: document.getElementById('classParallel').value,
        teamName: document.getElementById('teamName').value
    };
    
    // Display team info
    document.getElementById('displayTeamName').textContent = teamData.teamName;
    document.getElementById('displaySchoolInfo').textContent = 
        `${teamData.school}, ${teamData.class}${teamData.parallel} класс`;
    
    showPage('quizPage');
    loadQuestion();
});

// Timer Functions
function startTimer(duration) {
    clearInterval(timer);
    timeLeft = duration;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timerDisplay').textContent = 
        String(timeLeft).padStart(2, '0');
}

// Question Loading
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Update round info
    document.getElementById('roundTitle').textContent = question.roundTitle;
    document.getElementById('roundDescription').textContent = question.roundDescription;
    
    // Update question number
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Update question text
    document.getElementById('questionText').textContent = question.question;
    
    // Handle image
    const imageContainer = document.getElementById('questionImage');
    if (question.image) {
        imageContainer.textContent = question.image;
        imageContainer.classList.remove('hidden');
    } else {
        imageContainer.classList.add('hidden');
    }
    
    // Clear previous answers
    selectedAnswers = [];
    matchingPairs = {};
    
    // Load answers based on type
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    if (question.type === 'single') {
        loadSingleChoiceAnswers(question);
    } else if (question.type === 'multiple') {
        loadMultipleChoiceAnswers(question);
    } else if (question.type === 'matching') {
        loadMatchingAnswers(question);
    }
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Enable submit button
    document.getElementById('submitAnswer').disabled = true;
    
    // Start timer
    startTimer(question.time);
}

function loadSingleChoiceAnswers(question) {
    const container = document.getElementById('answersContainer');
    
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        div.onclick = () => selectSingleAnswer(index);
        
        const label = document.createElement('label');
        label.textContent = answer.text;
        
        div.appendChild(label);
        container.appendChild(div);
    });
}

function loadMultipleChoiceAnswers(question) {
    const container = document.getElementById('answersContainer');
    
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `answer-${index}`;
        checkbox.onchange = () => toggleMultipleAnswer(index);
        
        const label = document.createElement('label');
        label.htmlFor = `answer-${index}`;
        label.textContent = answer.text;
        
        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });
}

function loadMatchingAnswers(question) {
    const container = document.getElementById('answersContainer');
    
    const matchingDiv = document.createElement('div');
    matchingDiv.className = 'matching-container';
    
    // Left column
    const leftColumn = document.createElement('div');
    leftColumn.className = 'matching-column';
    leftColumn.innerHTML = '<h4>Даты:</h4>';
    
    question.leftItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'matching-item';
        itemDiv.textContent = `${item.id}) ${item.text}`;
        itemDiv.dataset.id = item.id;
        itemDiv.onclick = () => selectMatchingItem('left', item.id);
        leftColumn.appendChild(itemDiv);
    });
    
    // Right column
    const rightColumn = document.createElement('div');
    rightColumn.className = 'matching-column';
    rightColumn.innerHTML = '<h4>События:</h4>';
    
    question.rightItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'matching-item';
        itemDiv.textContent = `${item.id}) ${item.text}`;
        itemDiv.dataset.id = item.id;
        itemDiv.onclick = () => selectMatchingItem('right', item.id);
        rightColumn.appendChild(itemDiv);
    });
    
    matchingDiv.appendChild(leftColumn);
    matchingDiv.appendChild(rightColumn);
    container.appendChild(matchingDiv);
    
    // Pairs display
    const pairsDiv = document.createElement('div');
    pairsDiv.className = 'matching-pairs';
    pairsDiv.id = 'matchingPairs';
    container.appendChild(pairsDiv);
}

let matchingSelection = { left: null, right: null };

function selectMatchingItem(side, id) {
    // Clear previous selection for this side
    document.querySelectorAll(`.matching-item[data-id]`).forEach(item => {
        if (matchingSelection[side] === item.dataset.id) {
            item.classList.remove('selected');
        }
    });
    
    matchingSelection[side] = id;
    
    // Highlight selected item
    document.querySelectorAll(`.matching-item[data-id="${id}"]`).forEach(item => {
        item.classList.add('selected');
    });
    
    // If both sides selected, create pair
    if (matchingSelection.left && matchingSelection.right) {
        matchingPairs[matchingSelection.left] = matchingSelection.right;
        
        // Display pair
        updateMatchingPairsDisplay();
        
        // Clear selection
        document.querySelectorAll('.matching-item').forEach(item => {
            item.classList.remove('selected');
        });
        matchingSelection = { left: null, right: null };
        
        // Enable submit button if all pairs made
        const question = questions[currentQuestionIndex];
        if (Object.keys(matchingPairs).length === question.leftItems.length) {
            document.getElementById('submitAnswer').disabled = false;
        }
    }
}

function updateMatchingPairsDisplay() {
    const pairsDiv = document.getElementById('matchingPairs');
    pairsDiv.innerHTML = '<h4>Ваши пары:</h4>';
    
    Object.entries(matchingPairs).forEach(([left, right]) => {
        const pairDiv = document.createElement('div');
        pairDiv.className = 'pair-display';
        pairDiv.innerHTML = `
            <span>${left} → ${right}</span>
            <button onclick="removePair('${left}')">✕</button>
        `;
        pairsDiv.appendChild(pairDiv);
    });
}

function removePair(leftId) {
    delete matchingPairs[leftId];
    updateMatchingPairsDisplay();
    document.getElementById('submitAnswer').disabled = true;
}

function selectSingleAnswer(index) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select new answer
    document.querySelectorAll('.answer-option')[index].classList.add('selected');
    selectedAnswers = [index];
    
    // Enable submit button
    document.getElementById('submitAnswer').disabled = false;
}

function toggleMultipleAnswer(index) {
    const checkbox = document.getElementById(`answer-${index}`);
    
    if (checkbox.checked) {
        if (!selectedAnswers.includes(index)) {
            selectedAnswers.push(index);
        }
    } else {
        selectedAnswers = selectedAnswers.filter(i => i !== index);
    }
    
    // Enable submit button if at least one selected
    document.getElementById('submitAnswer').disabled = selectedAnswers.length === 0;
}

// Answer Submission
document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

function submitAnswer() {
    clearInterval(timer);
    
    const question = questions[currentQuestionIndex];
    let isCorrect = false;
    
    if (question.type === 'single') {
        if (selectedAnswers.length > 0) {
            isCorrect = question.answers[selectedAnswers[0]].correct;
            
            // Show feedback
            document.querySelectorAll('.answer-option').forEach((opt, index) => {
                opt.classList.add('disabled');
                if (question.answers[index].correct) {
                    opt.classList.add('correct');
                } else if (selectedAnswers.includes(index)) {
                    opt.classList.add('incorrect');
                }
            });
        }
    } else if (question.type === 'multiple') {
        const correctIndices = question.answers
            .map((a, i) => a.correct ? i : -1)
            .filter(i => i !== -1);
        
        isCorrect = selectedAnswers.length === correctIndices.length &&
                    selectedAnswers.every(i => correctIndices.includes(i));
        
        // Show feedback
        document.querySelectorAll('.answer-option').forEach((opt, index) => {
            opt.classList.add('disabled');
            if (question.answers[index].correct) {
                opt.classList.add('correct');
            } else if (selectedAnswers.includes(index)) {
                opt.classList.add('incorrect');
            }
        });
    } else if (question.type === 'matching') {
        isCorrect = Object.keys(question.correctPairs).every(
            key => matchingPairs[key] === question.correctPairs[key]
        );
    }
    
    // Update score
    if (isCorrect) {
        score += question.points;
        roundScores[question.round - 1] += question.points;
    }
    
    document.getElementById('scoreDisplay').textContent = score;
    
    // Disable submit button
    document.getElementById('submitAnswer').disabled = true;
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Results Display
function showResults() {
    document.getElementById('finalTeamName').textContent = teamData.teamName;
    document.getElementById('finalSchoolInfo').textContent = 
        `${teamData.school}, ${teamData.class}${teamData.parallel} класс`;
    document.getElementById('finalScore').textContent = score;
    
    document.getElementById('round1Score').textContent = roundScores[0];
    document.getElementById('round2Score').textContent = roundScores[1];
    document.getElementById('round3Score').textContent = roundScores[2];
    
    showPage('resultsPage');
}

// Certificate Generation
document.getElementById('generateCertificate').addEventListener('click', function() {
    document.getElementById('certTeamName').textContent = teamData.teamName;
    document.getElementById('certSchoolInfo').textContent = 
        `${teamData.school}, ${teamData.class}${teamData.parallel} класс`;
    document.getElementById('certScore').textContent = score;
    
    const today = new Date();
    const dateStr = today.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById('certDate').textContent = dateStr;
    
    showPage('certificatePage');
});

// Certificate Download
document.getElementById('downloadCertificate').addEventListener('click', function() {
    // Create a simple text-based certificate for download
    const certificateText = `
СЕРТИФИКАТ УЧАСТНИКА
Турнир «Знатоки моря» имени А.О. Шабалина

Команда: ${teamData.teamName}
${teamData.school}, ${teamData.class}${teamData.parallel} класс

Результат: ${score} баллов из 30

Дата: ${new Date().toLocaleDateString('ru-RU')}
    `;
    
    const blob = new Blob([certificateText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificate_${teamData.teamName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('Сертификат скачан! Вы можете сделать скриншот страницы для получения красивой версии сертификата.');
});

// Restart Quiz
document.getElementById('restartQuiz').addEventListener('click', function() {
    currentQuestionIndex = 0;
    score = 0;
    roundScores = [0, 0, 0];
    selectedAnswers = [];
    matchingPairs = {};
    
    document.getElementById('scoreDisplay').textContent = '0';
    
    showPage('registrationPage');
});

// Initialize
showPage('registrationPage');
