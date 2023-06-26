interface User {
    username: string;
    email: string;
    password: string;
}

const myName1= document.querySelector('#username') as HTMLInputElement;
const mypassword1 = document.querySelector('#password') as HTMLInputElement;

const login1 = document.querySelector('#submit-form') as HTMLFormElement;
let Users1: User[] = [];

login1.addEventListener('submit', (e) => {
    e.preventDefault();
    storageLocal1(); 
});

const storageLocal1 = (): void => {
    let userName = myName1.value;
    let userPassword = mypassword1.value;
   
    let userFromStorage = localStorage.getItem('users');
    Users1 = JSON.parse(userFromStorage);
    console.log(Users1);
    
    for (let u of Users1) {
        if (userName === u.username && userPassword === u.password) {
            window.location.href = './successfull.html';
        } else {
            window.location.href = './invalid.html'
        }
    }
};
