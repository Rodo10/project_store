
document.getElementById("login-btn").addEventListener("click", function() {
  // Get the login form element
  const loginForm = document.getElementById("login-form");
  
  // Toggle the visibility of the login form
  loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
});

const loginBtn = document.getElementById('login-btn');
const body = document.body;

loginBtn.addEventListener('click', () => {
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
    </div>`;

  body.appendChild(loginFormContainer);

  const loginFormElement = document.getElementById('login-form');
  loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulation
    if (username === 'admin' && password === 'password') {
      // Close the login form container
      body.removeChild(loginFormContainer);
      // Redirect to profile page (replace with actual profile URL)
      window.location.href = 'login.html';  //later on I will create this page
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
});

const showHiddenPass = (loginPass, loginEye) =>{
  const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

  iconEye.addEventListener('click', () =>{
     // Change password to text
     if(input.type === 'password'){
        // Switch to text
        input.type = 'text'

        // Icon change
        iconEye.classList.add('ri-eye-line')
        iconEye.classList.remove('ri-eye-off-line')
     } else{
        // Change to password
        input.type = 'password'

        // Icon change
        iconEye.classList.remove('ri-eye-line')
        iconEye.classList.add('ri-eye-off-line')
     }
  })
}

showHiddenPass('login-pass','login-eye')