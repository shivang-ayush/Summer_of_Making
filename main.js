// Show alert for "Get Started" button (if present)
function showAlert() {
  alert("Welcome to Own Your Orbitz!");
}

// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const status = document.querySelector('.form-status');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      status.textContent = "Thank you for reaching out! We'll get back to you soon.";
      form.reset();
    });
  }
});