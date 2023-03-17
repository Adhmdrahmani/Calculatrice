const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('input');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.value;

    switch(buttonText) {
      case 'C':
        screen.textContent = '';
        break;
      case '=':
        try {
          const result = math.evaluate(screen.textContent);
          screen.textContent = result;
        } catch {
          screen.textContent = 'Error';
        }
        break;
      case '+/-':
        if (screen.textContent !== '') {
          screen.textContent = parseFloat(screen.textContent) * -1;
        }
        break;
      case '%':
        if (screen.textContent !== '') {
          screen.textContent = parseFloat(screen.textContent) / 100;
        }
        break;
      default:
        screen.textContent += buttonText;
    }
  });
});
