import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function Input(props){
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
                    <TextField
                        required
                        id="outlined-password-input"
                        label={"Password"}
                        // className={classes.textField}
                        value={props.password}
                        onChange={(e) => setPassword( e.target.value )}
                        margin="normal"
                        variant="outlined"
                        type="password"
                        error={errorPwd}
                    />
                
        )
    }
}

