document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
 // Aqui você pode substituir por uma verificação real futuramente
  if (email === 'teste@ipet.com' && password === '123456') {
    alert('Login bem-sucedido!');

    // Redireciona para a home (vamos criar depois)
    window.location.href = 'home.html';
  } else {
    alert('E-mail ou senha incorretos.');
  }
});
