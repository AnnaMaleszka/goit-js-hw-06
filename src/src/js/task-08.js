const registerForm = document.querySelector("form.login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields");
  } else {
    console.log(`Email: ${email},
Password: ${password}`);
  }
  form.reset;
}
