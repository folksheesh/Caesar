document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Fungsi untuk halaman login
    function handleLogin() {
        var form = document.getElementById('form');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                console.log('Form submitted');

                // Tangkap username dan password yang dimasukkan
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                console.log('Username:', username);
                console.log('Password:', password);

                // Validasi password menggunakan regex
                var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)\S{8,}$/;
                var isPasswordValid = passwordRegex.test(password);
                console.log('Is password valid:', isPasswordValid);

                if (!isPasswordValid) {
                    document.getElementById('error-message').innerText = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.';
                    return;
                }

                // Simpan username di LocalStorage
                localStorage.setItem('username', username);

                // Arahkan ke halaman beranda
                window.location.href = 'home.html';
            });
        }
    }

    // Fungsi untuk halaman beranda
    function handleHomePage() {
        var username = localStorage.getItem('username');
        console.log('Retrieved Username:', username);
        var displayUsernameElements = document.querySelectorAll('.display-username');

        displayUsernameElements.forEach(function (element) {
            element.innerText = username;
        });
    }

    // Panggil fungsi berdasarkan halaman yang diakses
    handleLogin();
    handleHomePage();
});
