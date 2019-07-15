import React, { useState } from "react"
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';



export default function SignIn(){

    const [input, setInput] = useState("")
    const [password, setPassword] = useState("")
    const [errorLog, setErrorLog] = useState(false)
    const [errorPwd, setErrorPwd] = useState(false)
    const [disabled, setDissabled] = useState(true)

    function handleSubmit(e){
        // SEND POST REQUEST TO BACK WITH LOGIN PASSWORD
        e.preventDefault();
        // input.length === 0 ? setErrorLog(true) : setErrorLog(false)
        // password.length === 0 ? setErrorPwd(true) : setErrorPwd(false)
        setErrorLog(true)
        setErrorPwd(true)
    }
    return(
        <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="outlined-name"
                    label="Login"
                    // className={classes.textField}
                    value={input}
                    onChange={(e) => setInput(e.target.value) }
                    margin="normal"
                    variant="outlined"
                    error={errorLog}
                />
                <br />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    // className={classes.textField}
                    value={password}
                    onChange={(e) => setPassword( e.target.value )}
                    margin="normal"
                    variant="outlined"
                    type="password"
                    error={errorPwd}
                />
            <br />
            <Button 
                variant="outlined" 
                color="primary"
                type="submit"
                size="large" 
                // className={classes.button}
                disabled={disabled}
                >
                Connect
            </Button>
      </form>
      </Container>
    )
}
