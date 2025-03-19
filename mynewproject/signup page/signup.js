document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup successful! Now login.");
    window.location.href = "../login/index.html"; // Redirect to login
});
