document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "user" && password === "user") {
        // Redirect to Google.com after successful login
        window.location.href = "mainpage.html";
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
});
