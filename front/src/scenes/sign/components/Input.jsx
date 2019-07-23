import React from "react";
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';


export default function Input(props) {

    function updateField(e) {
        props.setValues({
            ...props.value,
            [e.target.name]: e.target.value,
            error: false
        })
    }
    // LOGIN, NOM , PRENOM , MAIL , PASSWORD1, PASSWORD2 
    var property = {};
    if (props.type === "password") {
        property = {
            "id": "standard-password-input",
            "type": "password",
            "label": "Password",
            "name": "password",
            "value": props['value'].password
        }
    } else if (props.type === "login") {
        property = {
            "id": "standard-login",
            "label": "Login",
            "type": "text",
            "name": "login",
            "value": props['value'].login
        }
    }
    else if (props.type === "mail") {
        property = {
            "id": "standard-mail",
            "label": "Email",
            "type": "text",
            "name": "mail",
            "value": props['value'].mail
        }
    } else if (props.type === "name") {
        property = {
            "id": "standard-name",
            "label": "Last name",
            "type": "text",
            "name": "name",
            "value": props['value'].name
        }
    } else if (props.type === "password2") {
        property = {
            "id": "outlined-password-input",
            "type": "password",
            "label": "Password confirmation",
            "name": "password2",
            "value": props['value'].password2
        }
    } else if (props.type === "firstName") {
        property = {
            "id": "first_name-input",
            "type": "text",
            "label": "First Name",
            "name": "firstName",
            "value": props['value'].firstName
        }
    }

    return (
        <TextField
            {...property}
            required
            margin="normal"
            variant="outlined"
            error={props.error}
            onInput={updateField}
        />
    )
}

