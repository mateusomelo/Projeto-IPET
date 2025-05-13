document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('loginMessage');

  const savedUser = JSON.parse(localStorage.getItem('ipetUser'));

  if (savedUser && email === savedUser.email && password === savedUser.password) {
    messageDiv.textContent = 'Login bem-sucedido!';
    messageDiv.style.color = 'green';

    // Redirecionar para a "home"
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 2000);
  } else {
    messageDiv.textContent = 'E-mail ou senha incorretos.';
    messageDiv.style.color = 'red';
  }
});
