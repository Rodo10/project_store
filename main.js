document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before adding the event listener
  
    // Get the login button by its ID
    var loginButton = document.getElementById("login-btn");
  
    // Add a click event listener to the button
    loginButton.addEventListener("click", function () {
      // Redirect to the login form page
      window.location.href = "login.html";
    });
  });
  /* Password show and hide */

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