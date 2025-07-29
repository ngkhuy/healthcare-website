document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Just for now (we'll connect this to the backend later)
  if (email === "test@example.com" && password === "123456") {
    document.getElementById("login-message").innerText = "Login successful!";
  } else {
    document.getElementById("login-message").innerText = "Invalid credentials.";
  }
});


// Signup logic
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      document.getElementById("signup-message").innerText = "Passwords do not match.";
      return;
    }

    // We'll connect this to the backend later
    document.getElementById("signup-message").innerText = `Signup successful! Welcome, ${name}.`;
  });
}