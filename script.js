document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por tu mensaje, será contestado a la brevedad :)!');
    });
});
