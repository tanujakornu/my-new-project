document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username && password) {
        alert("Login successful (Placeholder for backend authentication)");
    } else {
        alert("Please enter both username and password.");
    }
});
