function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Example validation
    if (username === "Khutsisho" && password === "Mashiane") {
        alert("Login successful!");
        return true;
    } else {
        errorMessage.textContent = "Invalid username or password.";
        return false;
    }
}
