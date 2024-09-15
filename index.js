const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }

    // Here you would typically send a request to your backend to authenticate the user
    // For this example, we'll just simulate a successful login
    console.log('Login successful!');
    // You can add your backend logic here
});
