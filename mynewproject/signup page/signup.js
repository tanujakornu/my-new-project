document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    let username = document.getElementById("newUsername").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("newPassword").value;
    
    if (!email.endsWith("@gitam.in")) {
        alert("Only GITAM emails (@gitam.in) are allowed for sign-up.");
        return;
    }
    
    if (username && email && password) {
        alert("Sign-up successful (Placeholder for backend storage)");
        window.location.href = "../login/login.html";
    } else {
        alert("Please fill in all fields.");
    }
});
