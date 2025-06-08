// Function to handle the contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the reCAPTCHA response
            const recaptchaResponse = grecaptcha.getResponse();
            
            if (!recaptchaResponse) {
                alert('Будь ласка, підтвердіть, що ви не робот');
                return;
            }
            
            // Here you would normally send the form data to your server
            // For this lab, we'll just show a success message
            alert('Повідомлення успішно надіслано!');
            contactForm.reset();
            grecaptcha.reset();
        });
    }
});

// Function to verify reCAPTCHA on private data page
function verifyRecaptcha() {
    const recaptchaResponse = grecaptcha.getResponse();
    
    if (!recaptchaResponse) {
        alert('Будь ласка, підтвердіть, що ви не робот');
        return;
    }
    
    // In a real app, you would verify this on the server
    // For this lab, we'll just show the content
    document.getElementById('captcha-gate').style.display = 'none';
    document.getElementById('private-content').style.display = 'block';
}
