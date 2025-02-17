const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const matchInput = document.querySelector('#confirm-password');
const btnRegistro = document.querySelector('button[type="submit"]');

const emailVal = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

let valemail = false;
let valpass = false;
let valMatch = false;
let valname = false;

nameInput.addEventListener('input', (e) => {
    valname = e.target.value.length >= 3;
    validar(nameInput, valname);
    console.log(valname)
});

emailInput.addEventListener('input', e => {
    console.log(e.target.value)
    valemail = emailVal.test(e.target.value);
    validar(emailInput, valemail);
});

passwordInput.addEventListener('input', (e) => {
    valpass = passwordVal.test(e.target.value);
    validar(passwordInput, valpass);
    validar(matchInput, valMatch);
});

matchInput.addEventListener('input', (e) => {
    valMatch = e.target.value === passwordInput.value;
    validar(matchInput, valMatch);
    validar(passwordInput, valpass);
});

formulario.addEventListener('submit',async (e) => {
    e.preventDefault();
    if (valname && valemail && valpass && valMatch) {
        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            password2: matchInput.value
        };
        const response = await axios.post('/api/users',newUser);
        console.log(response.status);
        if(response.status === 200){
            window.location.href = '/sesion/'
        }
        alert('Registration successful!'); //cambiar a notification 
        formulario.reset();
       // console.log(response.status) 
    }
});

const validar = (input, val) => {
    btnRegistro.disabled = !(valname && valemail && valpass && valMatch);
    input.classList.remove('focus:outline-violet-600', 'focus:coutline-red-700', 'outline-4', 'focus:outline-green-700');
    if (val) {
        input.classList.add('focus:outline-green-700', 'outline-4');
    } else if (input.value === '') {
        input.classList.add('focus:outline-violet-600');
    } else {
        input.classList.add('focus:outline-red-700', 'outline-4');
    }
};

