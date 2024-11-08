function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "Naveen" && password === "Hospital$143") {
        window.location.href = "hospitall.html"
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}
