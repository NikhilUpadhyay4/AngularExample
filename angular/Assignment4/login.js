var myName1 = document.querySelector('#username');
var mypassword1 = document.querySelector('#password');
var login1 = document.querySelector('#submit-form');
var Users1 = [];
login1.addEventListener('submit', function (e) {
    e.preventDefault();
    storageLocal1();
});
var storageLocal1 = function () {
    var userName = myName1.value;
    var userPassword = mypassword1.value;
    var userFromStorage = localStorage.getItem('users');
    Users1 = JSON.parse(userFromStorage);
    console.log(Users1);
    for (var _i = 0, Users1_1 = Users1; _i < Users1_1.length; _i++) {
        var u = Users1_1[_i];
        if (userName === u.username || userPassword === u.password) {
            window.location.href = './successfull.html';
        }
        else {
            window.location.href = './invalid.html';
        }
    }
};
