// Initialize EmailJS (replace 'YOUR_USER_ID' with your actual public key)
(function() {
  emailjs.init("1xT6Fxd6oaUo9Rioq");
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const status = document.querySelector('.form-status');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      emailjs.sendForm('service_dk8b18h', 'template_skdj8en', this)
        .then(function() {
          status.textContent = "Thank you for reaching out! We'll get back to you soon.";
          form.reset();
        }, function(error) {
          status.textContent = "Oops! Something went wrong. Please try again.";
        });
    });
  }
});

// Optional: For the "Get Started" button
function showAlert() {
  alert("Welcome to Own Your Orbitz!");
}