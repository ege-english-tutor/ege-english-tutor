const stats = JSON.parse(localStorage.getItem("stats")) || {
  total: 0,
  correct: 0,
  wrong: 0
};

const examStats = JSON.parse(localStorage.getItem("examStats")) || {
  lastResult: null,
  bestResult: null
};

const weakSubtopics =
  JSON.parse(localStorage.getItem("weakSubtopics")) || {};

function renderMainStats() {
  const totalEl = document.getElementById("progress-total");
  const correctEl = document.getElementById("progress-correct");
  const wrongEl = document.getElementById("progress-wrong");
  const accuracyEl = document.getElementById("progress-accuracy");

  const accuracy =
    stats.total === 0
      ? 0
      : Math.round((stats.correct / stats.total) * 100);

  totalEl.textContent = stats.total;
  correctEl.textContent = stats.correct;
  wrongEl.textContent = stats.wrong;
  accuracyEl.textContent = `${accuracy}%`;
}

function renderExamStats() {
  const lastExamEl = document.getElementById("progress-last-exam");
  const bestExamEl = document.getElementById("progress-best-exam");

  lastExamEl.textContent =
    examStats.lastResult === null
      ? "—"
      : `${examStats.lastResult}%`;

  bestExamEl.textContent =
    examStats.bestResult === null
      ? "—"
      : `${examStats.bestResult}%`;
}

function renderWeakTopic() {
  const weakTopicEl = document.getElementById("weak-topic-progress");

  let weakestTopic = null;
  let maxMistakes = 0;

  for (let topic in weakSubtopics) {
    if (weakSubtopics[topic] > maxMistakes) {
      maxMistakes = weakSubtopics[topic];
      weakestTopic = topic;
    }
  }

  if (!weakestTopic) {
    return;
  }

  weakTopicEl.innerHTML = `
    <strong>${weakestTopic}</strong>
    <p>
      Ошибок по этой теме: <b>${maxMistakes}</b>.
      Рекомендуется вернуться к соответствующему модулю,
      внимательно изучить теорию и снова пройти задания.
    </p>
  `;
}

function renderRecommendation() {
  const recommendationEl =
    document.getElementById("learning-recommendation");

  const accuracy =
    stats.total === 0
      ? 0
      : Math.round((stats.correct / stats.total) * 100);

  if (stats.total === 0) {
    recommendationEl.textContent =
      "Начни с лёгкого уровня, затем переходи к среднему и сложному. После этого проверь себя в экзаменационном режиме.";
    return;
  }

  if (accuracy < 50) {
    recommendationEl.textContent =
      "Пока точность ниже 50%. Лучше ещё раз пройти лёгкий уровень, внимательно читать теорию и разбор примеров.";
    return;
  }

  if (accuracy < 75) {
    recommendationEl.textContent =
      "Результат уже неплохой. Продолжай тренироваться на среднем уровне и обращай внимание на слабые темы.";
    return;
  }

  recommendationEl.textContent =
    "Хороший результат. Можно чаще переходить к сложным заданиям и проверять себя в экзаменационном режиме.";
}

renderMainStats();
renderExamStats();
renderWeakTopic();
renderRecommendation();