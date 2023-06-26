interface User {
    username: string;
    email: string;
    password: string;
  }
  
  const username = document.querySelector('#username') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  const submit = document.querySelector('#submit-btn') as HTMLInputElement;
  let users: User[] = [];
  
  submit.addEventListener('click', () => {
    storeLocal();
    window.location.href = 'login.html';
  });
  
  const storeUser = (users): void => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  const storeLocal = (): void => {
    let userName = username.value;
    let userEmail = email.value;
    let userPassword = password.value;
    let userFromStorage = localStorage.getItem('users');
    users = JSON.parse(userFromStorage);
    if (users == null) users = [];
    // for (let u of users) {
    if (userName.trim() === '' || userEmail.trim() === '') {
      alert('Invalid');
      return;
    } else {
      let userObj = {
        username: userName,
        email: userEmail,
        password: userPassword,
      };
      users.push(userObj);
      storeUser(users);
    }
    //}
  };
  