document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (!validateName(firstName) || !validateEmail(email) || !validatePhoneNumber(phoneNumber)) {
        alert('Please enter valid information in all fields.');
        return;
    }
    alert('Form submitted successfully!');
});
function validateName(name) {
    return name.trim() !== '';
}
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhoneNumber(phoneNumber) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}
