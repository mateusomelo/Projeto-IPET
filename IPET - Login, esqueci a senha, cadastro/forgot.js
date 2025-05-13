document.getElementById('forgotForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const messageDiv = document.getElementById('forgotMessage');

  if (email === '') {
    messageDiv.textContent = 'Por favor, digite um e-mail.';
    messageDiv.style.color = 'red';
    return;
  }

  // Exibe a mensagem personalizada
  messageDiv.innerHTML = `Um e-mail foi enviado para <strong>${email}</strong>, Para finalizar seu cadastro.`;
  messageDiv.style.color = 'green';
});
