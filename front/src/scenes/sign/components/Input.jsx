import React from "react";
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';


export default function Input(props) {

    function updateField(e) {
        props.setValues({
            ...props.value,
            [e.target.name]: e.target.value
        })
    }
    // LOGIN, NOM , PRENOM , MAIL , PASSWORD1, PASSWORD2 
    var property = {};
    if (props.type === "password") {
        property = {
            "id": "outlined-password-input",
            "type": "password",
            "label": "Password",
            "name": "password",
            "value": props['value'].password
        }
    } else if (props.type === "login") {
        property = {
            "id": "outlined-name",
            "label": "Login",
            "type": "text",
            "name": "login",
            "value": props['value'].login
        }
    }
    else if (props.type === "mail") {
        property = {
            "id": "outlined-name",
            "label": "Email",
            "type": "text",
            "name": "mail",
            "value": props['value'].mail
        }
    } else if (props.type === "nom") {
        property = {
            "id": "outlined-name",
            "label": "Nom",
            "type": "text",
            "name": "nom",
            "value": props['value'].nom
        }
    } else if (props.type === "password2") {
        property = {
            "id": "outlined-password-input",
            "type": "password",
            "label": "Password confirmation",
            "name": "password2",
            "value": props['value'].password2
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

