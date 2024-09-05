function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === 'admin' && password == '12345') {
        
        window.location.href= 'home.html'; 
    } else {
        
        errorMessage.style.display = 'block';
    }
}