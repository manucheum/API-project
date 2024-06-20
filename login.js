const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // TO DO: implement login logic here
  // For now, just alert the email and password
  alert(`Email: ${email}, Password: ${password}`);
});