function email() {
    document.querySelector('.contactus').addEventListener('submit', function(event) {
        event.preventDefault(); // This prevents the default form submission behavior.
    
        // Get the input from the form
        var name = document.getElementById('nameInput').value;
        var email = document.getElementById('emailInput').value;
        var phone = document.getElementById('phoneInput').value;
        var message = document.getElementById('messageInput').value;
        
        // Compose the email
        var subject = encodeURIComponent("Inquiry from " + name);
        var body = encodeURIComponent(
            "Name: " + name + 
            "\nEmail: " + email + 
            "\nPhone: " + phone + 
            "\n\nMessage:\n" + message
        );
        
        // Open the mail application with the email data
        window.location.href = "mailto:your_email@example.com?subject=" + subject + "&body=" + body;
    });
}
