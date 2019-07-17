import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '../components/Input'

export default function SignUn() {

    const [form, setValues] = useState({
        login: "",
        password: "",
        disabled: true,
    })

    const [errorLog, setErrorLog] = useState(false)
    const [errorPwd, setErrorPwd] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        fetch('192.168.99.100:5000/api/users')
            .then(response => console.log(response))
        // setErrorLog(true)
        // setErrorPwd(true)
    }
    const isEnabled = form.login.length > 0 && form.password.length > 0;
    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Input type="login" error={false} value={form} setValues={setValues} />
                <br />
                <Input type="password" error={false} value={form} setValues={setValues} />
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
