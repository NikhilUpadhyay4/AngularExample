var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var submit = document.querySelector('#submit-btn');
var users = [];
submit.addEventListener('click', function () {
    storeLocal();
    window.location.href = 'login.html';
});
var storeUser = function (users) {
    localStorage.setItem('users', JSON.stringify(users));
};
var storeLocal = function () {
    var userName = username.value;
    var userEmail = email.value;
    var userPassword = password.value;
    var userFromStorage = localStorage.getItem('users');
    users = JSON.parse(userFromStorage);
    if (users == null)
        users = [];
    // for (let u of users) {
    if (userName.trim() === '' || userEmail.trim() === '') {
        alert('Invalid');
        return;
    }
    else {
        var userObj = {
            username: userName,
            email: userEmail,
            password: userPassword
        };
        users.push(userObj);
        storeUser(users);
    }
    //}
};
