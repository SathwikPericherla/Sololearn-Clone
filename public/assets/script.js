const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("access-denied");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = loginForm.user_id.value;
    const password = loginForm.pwd.value;
    const email = loginForm.email.value;

    if (email=== mail && name === "id" && password === "pass") {
        window.location.href="python.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})