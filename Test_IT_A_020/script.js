function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }
    else if (username != "admin" && password != "admin"){
        alert("Invalid Login Details");
        return false;
    }

    
    window.location.href = "index.html";
    return false;
}
