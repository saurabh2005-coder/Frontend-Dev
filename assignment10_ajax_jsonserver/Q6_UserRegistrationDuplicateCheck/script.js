document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3006/users";
  const form = document.getElementById("registerForm");
  const statusMsg = document.getElementById("statusMsg");

  function setStatus(message, isError = false) {
    statusMsg.textContent = message;
    statusMsg.style.color = isError ? "red" : "green";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      setStatus("Please fill all fields.", true);
      return;
    }

    // Duplicate email check
    axios.get(baseUrl, {
      params: { email }
    }).then(res => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        setStatus("Email already registered.", true);
      } else {
        // Register new user
        axios.post(baseUrl, { name, email, password })
          .then(() => {
            setStatus("Registration successful!");
            form.reset();
          })
          .catch(() => {
            setStatus("Error during registration.", true);
          });
      }
    }).catch(() => {
      setStatus("Error checking email.", true);
    });
  });
});
