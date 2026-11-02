function goToScreen(screenNumber) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  
  const targetScreen = document.getElementById(`screen-${screenNumber}`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

// Función para que el botón "No" se mueva y huya del cursor
function moveNoButton(btn) {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}