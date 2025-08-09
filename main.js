// Initialize EmailJS (replace 'YOUR_USER_ID' with your actual public key)
(function() {
  emailjs.init("1xT6Fxd6oaUo9Rioq");
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('booking-form');
  const status = document.querySelector('.form-status');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      emailjs.sendForm('service_dk8b18h', 'template_skdj8en', this)
        .then(function() {
          alert("Booking submitted!");
          form.reset();
        }, function(error) {
          alert("Oops! Something went wrong. Please try again.");
        });
    });
  }
});

function showDetails(info) {
    document.getElementById('details').innerText = info;
}

function hideDetails() {
    document.getElementById('details').innerText = '';
}

// Optional: For the "Get Started" button
function showAlert() {
  alert("Welcome to Own Your Orbitz!");
}