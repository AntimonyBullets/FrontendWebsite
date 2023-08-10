let menuIcon = document.getElementById('menu-icon');
let sidebar = document.getElementById('sidebar');
menuIcon.addEventListener('click' , ()=> {
    sidebar.classList.toggle('active');
})

let arrow = document.getElementById('arrow');
arrow.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
})

let signUpButton = document.getElementById('btn-1');
let signUpWindow = document.getElementById('sign-up');
let overlay = document.getElementById('overlay');
signUpButton.addEventListener('click', () =>{
    signUpWindow.style.display = 'block';
    overlay.style.display = 'block';
})

let cross = document.getElementById('cross');
cross.addEventListener('click',()=>{
    signUpWindow.style.display = 'none';
    overlay.style.display = 'none';
})
let emailValid = false;
let email = document.getElementById('email');
let emptyEmail = document.getElementById('empty-email');
email.addEventListener('focusin', (e)=>{
    if(e.target.value.length > 0){
        email.style.borderBottom = '1px solid rgb(0, 191, 255)';
    }
    else{
        email.style.borderBottom = '1px solid red';
        emptyEmail.style.display = 'block';
    }
})
email.addEventListener('focusout', ()=>{
    email.style.borderBottom = '1px solid grey';
    emptyEmail.style.display = 'none';
})
email.addEventListener('input', ()=>{
    if (email.value.length > 0) {
        email.style.borderBottom = '1px solid rgb(0, 191, 255)';
        emptyEmail.style.display = 'none';
        emailValid = true;
    }
    else{
        email.style.borderBottom = '1px solid red';
        emptyEmail.style.display = 'block';
        emailValid = false;
    }
})
let username = document.getElementById('username');
let takenUsername = ['a', 'b', 'c', 'alpha', 'beta', 'gamma', 'rudraksh', 'antony', 'jingping'];
let emptyUsername = document.getElementById('empty-username');
let usernameValid = false;
username.addEventListener('focusin', (e)=>{
    if(e.target.value.length > 0){
        username.style.borderBottom = '1px solid rgb(0, 191, 255)';
        for (const elements of takenUsername) {
            if(e.target.value === elements){
                username.style.borderBottom = '1px solid red';
                emptyUsername.style.display = 'block';
                emptyUsername.innerHTML = 'The username has already been taken';
            }
        }
    }
    else{
        username.style.borderBottom = '1px solid red';
        emptyUsername.style.display = 'block';
    }
})
username.addEventListener('focusout', ()=>{
    username.style.borderBottom = '1px solid grey';
    emptyUsername.style.display = 'none';
})
username.addEventListener('input', ()=>{
    for (const elements of takenUsername) {
        if(username.value.length > 0 && username.value !== elements){
            emptyUsername.style.display = 'none';
            username.style.borderBottom = '1px solid rgb(0, 191, 255)';
            usernameValid = true;
        }
        else{
            emptyUsername.style.display = 'block';
            username.style.borderBottom = '1px solid red';
            username.value.length === 0 ? emptyUsername.innerHTML = 'The username cannot be empty' : emptyUsername.innerHTML = 'The username has already been taken';
            usernameValid = false;
            break;
        }
    }
})
let password = document.getElementById('password');
let emptyPassword = document.getElementById('empty-password');
let passwordValid = false;
password.addEventListener('focusin', (e)=> {
    if(e.target.value.length >= 8){
        password.style.borderBottom = '1px solid rgb(0, 191, 255)';
    }
    else{
        password.style.borderBottom = '1px solid red';
        emptyPassword.style.display = 'block';
    }
})
password.addEventListener('focusout', ()=>{
    password.style.borderBottom = '1px solid grey';
    emptyPassword.style.display = 'none';
})
password.addEventListener('input', ()=>{
    if(password.value.length >= 8){
        password.style.borderBottom = '1px solid rgb(0, 191, 255)';
        emptyPassword.style.display = 'none';
        passwordValid = true;
    }
    else{
        password.style.borderBottom = '1px solid red';
        emptyPassword.style.display = 'block';
        passwordValid = false;
    }
})
setInterval(() => {
    console.log(usernameValid)
}, 1000);