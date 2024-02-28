const loginBtn = document.getElementById('login-btn');
const body = document.body;

loginBtn.addEventListener('click', () => {
  // Create a div for the login form
  const loginFormContainer = document.createElement('div');
  loginFormContainer.innerHTML = `
    <div id="login-form-container">
      <h2>Iniciar sesión</h2>
      <form id="login-form">
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  `;

  // Append the login form to the body
  body.appendChild(loginFormContainer);

  // Handle form submission
  const loginFormElement = document.getElementById('login-form');
  loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate successful login
    if (username === 'admin' && password === 'password') {
      // Close the login form container
      body.removeChild(loginFormContainer);
      // Redirect to profile page (replace with actual profile URL)
      window.location.href = 'profile.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
});
