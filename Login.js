const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kirim data ke API menggunakan fetch atau XMLHttpRequest
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Lakukan sesuatu berdasarkan respon dari API
    })
    .catch(error => {
        console.error('Error:', error);
    });
});