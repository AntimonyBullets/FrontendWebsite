let navbar = document.querySelector('nav');
let menuIcon = document.getElementById('menu-icon');
let sidebar = document.getElementById('sidebar');
const windowHeight = window.innerHeight;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollThreshold = 5.5/100 * windowHeight;

  if (scrollY > scrollThreshold) {
    navbar.style.backgroundColor = 'rgba(23,29,35 , 0.5)';
    navbar.style.backdropFilter = 'blur(5px)';
    sidebar.style.height = '100vh';
    sidebar.style.top = '0';
    sidebar.style.borderTop = 'none';
  } else {
    navbar.style.backgroundColor = 'transparent'; 
    sidebar.style.height = '94.5vh';
    sidebar.style.top = '5.5vh';
    sidebar.style.borderTop = '1px solid white';
  }
});
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})
let arrow = document.getElementById('arrow');
arrow.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

let signUpButton = document.getElementById('btn-1');
let signUpWindow = document.getElementById('sign-up');
let overlay = document.getElementById('overlay');
signUpButton.addEventListener('click', () => {
    signUpWindow.style.display = 'block';
    overlay.style.display = 'block';
})

let cross = document.getElementById('cross');
cross.addEventListener('click', () => {
    signUpWindow.style.display = 'none';
    overlay.style.display = 'none';
})
let emailValid = false;
let usernameValid = false;
let passwordValid = false;
let overlay1 = document.getElementById('overlay-1');
function validity() {
    if (usernameValid === true && passwordValid === true && emailValid === true) {
        overlay1.style.display = 'none';
    }
    else {
        overlay1.style.display = 'block';
    }
}
let email = document.getElementById('email');
let emptyEmail = document.getElementById('empty-email');
email.addEventListener('focusin', (e) => {
    if (e.target.value.length > 0) {
        email.style.borderBottom = '1px solid rgb(0, 191, 255)';
    }
    else {
        email.style.borderBottom = '1px solid red';
        emptyEmail.style.display = 'block';
    }
})
email.addEventListener('focusout', () => {
    email.style.borderBottom = '1px solid grey';
    emptyEmail.style.display = 'none';
})
email.addEventListener('input', () => {
    if (email.value.length > 0) {
        email.style.borderBottom = '1px solid rgb(0, 191, 255)';
        emptyEmail.style.display = 'none';
        emailValid = true;
        validity();
    }
    else {
        email.style.borderBottom = '1px solid red';
        emptyEmail.style.display = 'block';
        emailValid = false;
        validity();
    }
})
let username = document.getElementById('username');
let takenUsername = ['a', 'b', 'c', 'alpha', 'beta', 'gamma', 'rudraksh', 'antony', 'jingping'];
let emptyUsername = document.getElementById('empty-username');
username.addEventListener('focusin', (e) => {
    if (e.target.value.length > 0) {
        username.style.borderBottom = '1px solid rgb(0, 191, 255)';
        for (const elements of takenUsername) {
            if (e.target.value === elements) {
                username.style.borderBottom = '1px solid red';
                emptyUsername.style.display = 'block';
                emptyUsername.innerHTML = 'The username has already been taken';
            }
        }
    }
    else {
        username.style.borderBottom = '1px solid red';
        emptyUsername.style.display = 'block';
    }
})
username.addEventListener('focusout', () => {
    username.style.borderBottom = '1px solid grey';
    emptyUsername.style.display = 'none';
})
username.addEventListener('input', () => {
    for (const elements of takenUsername) {
        if (username.value.length > 0 && username.value !== elements) {
            emptyUsername.style.display = 'none';
            username.style.borderBottom = '1px solid rgb(0, 191, 255)';
            usernameValid = true;
            validity();
        }
        else {
            emptyUsername.style.display = 'block';
            username.style.borderBottom = '1px solid red';
            username.value.length === 0 ? emptyUsername.innerHTML = 'The username cannot be empty' : emptyUsername.innerHTML = 'The username has already been taken';
            usernameValid = false;
            validity();
            break;
        }
    }
})
let password = document.getElementById('password');
let emptyPassword = document.getElementById('empty-password');
password.addEventListener('focusin', (e) => {
    if (e.target.value.length >= 8) {
        password.style.borderBottom = '1px solid rgb(0, 191, 255)';
    }
    else {
        password.style.borderBottom = '1px solid red';
        emptyPassword.style.display = 'block';
    }
})
password.addEventListener('focusout', () => {
    password.style.borderBottom = '1px solid grey';
    emptyPassword.style.display = 'none';
})
password.addEventListener('input', () => {
    if (password.value.length >= 8) {
        password.style.borderBottom = '1px solid rgb(0, 191, 255)';
        emptyPassword.style.display = 'none';
        passwordValid = true;
        validity();
    }
    else {
        password.style.borderBottom = '1px solid red';
        emptyPassword.style.display = 'block';
        passwordValid = false;
        validity();
    }
})
let myInput = document.querySelectorAll(".myInput");
myInput.forEach(function (e) {
    e.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) {
            event.preventDefault();
        }
    });
});
console.log(window.innerHeight);
let about = document.getElementById('about');
let home = document.getElementById('home')
let about_section = document.getElementById('about-section');
let home_section = document.getElementById('home-section');
about.addEventListener('click', ()=>{
    home_section.style.display = 'none';
    about_section.style.display = 'block';
})
home.addEventListener('click', ()=>{
    about_section.style.display = 'none';
    home_section.style.display = 'block';
})