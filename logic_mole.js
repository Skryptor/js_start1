document.addEventListener('DOMContentLoaded', () => {
  // Инициализация элементов
  const holesContainer = document.querySelector('.holes');
  const scoreDisplay = document.getElementById('score');
  const missesDisplay = document.getElementById('misses');

  // Игровые переменные
  let score = 0;
  let misses = 0;
  let gameActive = false;
  let timer;
  const moles = document.querySelectorAll('.mole');
  
  // Функция появления крота
  function showMole() {
    if (!gameActive) return;
    
    // Скрыть всех кротов
    moles.forEach(mole => mole.classList.remove('up'));
    
    // Случайный крот
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    
    // Показать крота
    mole.classList.add('up');
    
    // Таймер скрытия
    setTimeout(() => {
      if (mole.classList.contains('up')) {
        mole.classList.remove('up');
        missMole();
      }
    }, 750);
  }
  
  // Обработка клика
  moles.forEach(mole => {
    mole.addEventListener('click', () => {
      if (mole.classList.contains('up')) {
        mole.classList.remove('up');
        score++;
        scoreDisplay.textContent = score;
        checkWin();
      }
      if (gameActive) {
        clearTimeout(timer);
        showMole();
      }
    });
  });
  
  // Пропущенный крот
  function missMole() {
    if (!gameActive) return;
    
    misses++;
    missesDisplay.textContent = misses;
    checkLose();
    
    if (gameActive) {
      clearTimeout(timer);
      timer = setTimeout(showMole, 600);
    }
  }
  
  // Проверка победы
  function checkWin() {
    if (score == 10) {
      endGame("Победа! Вы убили 10 кротов!");
    }
  }
  
  // Проверка поражения
  function checkLose() {
    if (misses == 5) {
      endGame("Поражение! Вы пропустили 5 кротов");
    }
  }
  
  // Завершение игры
  function endGame(message) {
    gameActive = false;
    clearTimeout(timer);
    alert(message);
  }
  
  // Старт игры
  window.startGame = function() {
    score = 0;
    misses = 0;
    gameActive = true;
    scoreDisplay.textContent = score;
    missesDisplay.textContent = misses;
    showMole();
  }
});