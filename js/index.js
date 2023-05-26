import { validator, data } from "./validator.js";
import { alert } from "./alert.js";

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const textarea = document.querySelector('#form textarea');

inputs.forEach(element => {
    element.addEventListener('blur', validator);
});

textarea.addEventListener('blur', validator);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(data.name && data.surname && data.password && data.email && data.message){
        alert("Form submitted successfully");
        form.reset();
    } else {
        alert("Invalid form data");
    }
});




