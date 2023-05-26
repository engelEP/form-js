import { alert } from "./alert.js";

const validation = {
    empty: /^[]*$/,
    password: /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){1,}).{6,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/,
    message: /^[\s\S]{0,50}$/
}

export const data = {
    name: false,
    surname: false,
    password: false,
    email: false,
    message: false,
}

export function validator(input) {

    switch (input.target.name) {
        case "Name":
            if(validation.empty.test(input.target.value)){
                alert(`The field "${input.target.name}" is required`);
                data.name = false;
            }else {
                data.name = true;
            }
            break;
        case "Surname":
            if(validation.empty.test(input.target.value)){
                alert(`The field "${input.target.name}" is required`);
                data.surname = false;
            } else {
                data.surname = true;
            }
            break;
        case "Password":
                if(!validation.password.test(input.target.value)){
                    alert("Format password: length of 6, 1 number and 1 capital letter");
                    data.password = false;
                } else {
                    data.password = true;
                }
            break;
        case "Email":
            if(!validation.email.test(input.target.value)){
                alert("Email is invalid");
                data.email = false;
            } else {
                data.email = true;
            }
            break;
        case "Message":
            if(!validation.message.test(input.target.value)){
                alert("The maximum message length 1 to 50 letters");
                data.message = false;
            } else {
                data.message = true;
            }
            break;
        default:
            break;
    }
}