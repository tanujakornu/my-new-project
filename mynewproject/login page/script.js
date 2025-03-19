document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Dummy authentication
    if (username === "user" && password === "pass") { 
        alert("Login successful!");
        window.location.href = "../dashboard/index.html"; // Redirect to dashboard
    } else {
        alert("Invalid username or password.");
    }
});
