import React, { useState } from "react"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '../components/Input'

export default function SignUn() {

    const [form, setValues] = useState({
        mail: "",
        password: "",
        password2: ""
    })
    const [errorLog, setErrorLog] = useState(false)
    const [errorPwd, setErrorPwd] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        // check data before send request to BACK
        console.log(form.mail, form.password, form.password2)
        // setErrorLog(true)
        // setErrorPwd(true)
    }
    const isEnabled = (form.mail.length > 0) && (form.password.length > 0) && (form.password2.length > 0);

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Input type="mail" error={false} value={form} setValues={setValues} />
                <br />
                <Input type="password" error={false} value={form} setValues={setValues} />
                <br />
                <Input type="password2" error={false} value={form} setValues={setValues} />
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
