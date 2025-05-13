document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const messageDiv = document.getElementById('registerMessage');

  if (!name || !email || !password || !confirmPassword) {
    messageDiv.textContent = 'Por favor, preencha todos os campos.';
    messageDiv.style.color = 'red';
    return;
  }

  if (password !== confirmPassword) {
    messageDiv.textContent = 'As senhas não coincidem.';
    messageDiv.style.color = 'red';
    return;
  }

  // Aqui você pode salvar em localStorage ou banco de dados no futuro
  messageDiv.textContent = 'Cadastro realizado com sucesso!';
  messageDiv.style.color = 'green';

  // Redirecionar para login (simulado)
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
});
