document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Send email via EmailJS
    emailjs.send("Service_ea3hvi4", "template_iqf2v7t", {
        name: name,
        email: email,
        message: message
    })
    .then(function() {
        document.getElementById("formMessage").innerText =
            "Thank you, " + name + "! Your message has been sent successfully.";

        document.getElementById("contactForm").reset();
    }, function(error) {
        document.getElementById("formMessage").innerText =
            "Error sending message. Please try again.";
    });
});
