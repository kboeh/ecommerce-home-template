const loginToggle = document.querySelectorAll(".login, .login-close");
const signIn = document.querySelector(".login-container")

loginToggle.forEach((loginToggle) => {
    loginToggle.addEventListener("click", () => {
        signIn.classList.toggle("open");
        // allows overlay to change display when 'open' is toggled
        document.body.classList.toggle("open");
    });
});