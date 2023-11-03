function handleFormSubmission(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var messageElement = document.querySelector(".message");

    if (isValidEmail(email)) {
        messageElement.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
    } else {
        messageElement.textContent = "Please enter a valid email address.";
    }

    document.getElementById("email").value = "";

    // Clear the message after a set time (optional)
    setTimeout(function() {
        messageElement.textContent = '';
    }, 3000); // 3000 milliseconds (3 seconds) - adjust as needed
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function starter() {
    var btn = document.getElementsByClassName("btn")[1];
    btn.addEventListener("click", handleFormSubmission);
}


  

window.onload = starter;
