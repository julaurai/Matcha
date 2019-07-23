import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '../components/Input'
import axios from 'axios'

export default function SignUn() {

    const [form, setValues] = useState({
        login: "",
        password: "",
        error: false
    })

    function handleSubmit(e) {
        e.preventDefault();
        var regex = {
            "login": new RegExp("^[a-zA-Z0-9_-]{5,15}$"),
            "passwordStrong": new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
            "passwordMedium": new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")
        }
        if (regex.login.test(form.login) && regex.passwordMedium.test(form.password)) {
            console.log("sending request to DB");
            // axios.get('https://jsonplaceholder.typicode.com/users')
            //         .then(res => {
            //             const persons = res.data;
            //             console.log(persons)
            //         })
        } else {
            setValues({
                ...form,
                error: true
            });
        }
    }
    const isEnabled = form.login.length > 0 && form.password.length > 0;
    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Input type="login" error={form.error} value={form} setValues={setValues} />
                <br />
                <Input type="password" error={form.error} value={form} setValues={setValues} />
                <br />
                <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    size="large"
                    disabled={!isEnabled}
                    value="Connect"
                >Connect</Button>
            </form>
        </Container>
    )
}
