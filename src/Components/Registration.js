import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, FormHelperText, TextField, Button, Paper, Container,Link} from "@mui/material";
import UserPool from './UserPool';

function Registration(){
    const [name, setName] = useState("");
    const [email, setemailid] = useState('');
    const [password, setPassword] = useState('');
    const [errorregistration, seterrorregistration] = useState("");
    const [emailError, setemailidError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate()
    function handleEmailid(event) {
        seterrorregistration("");
        const email = event.target.value;
        const regexofemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!email.trim()) {
            setemailidError("Email is not correct");
        }
        else if(!regexofemail.test(email)) {
            setemailidError("Email is not correct");
        } else {
            setemailidError('');
        }
        setemailid(email);
    }
    function handlepass(event) {
        seterrorregistration("");
        const passwordValue = event.target.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordValue.trim()) {
            setPasswordError("Passord is incorrect");
        } else if(!passwordRegex.test(passwordValue)) {
            const err = "Password doesn't match the criteria, \n" + 
                  "at least one uppercase letter, \n" +
                  "at least one uppercase letter,\n" +
                  "at least one special character "+
                  "at least one lowercase letter,\n" 

            setPasswordError(err)
        } else {
            setPasswordError("");
        }
        setPassword(passwordValue);
    }
    const handleSubmit = (event) => {

    console.log(name, email, password)
    UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
            console.error(err);
        }

        console.log(data);
        navigate('/Login')
    })
   
    
    }
    

    
    return(
        <Container maxWidth="md">
                <br />
                <Grid item style={{ }}>
                    <Paper elevation={18} style={{ justifyContent: "center", alignItems: "center" }}>
                        <form style={{ margin: "5%" }}>
                            <br />
                            <Typography variant="h5" style={{ padding: "2%" }}>
                            <b>Registration </b>
                            </Typography>
                            <FormHelperText style={{ color: "red" }}>
                                {errorregistration}
                            </FormHelperText>
                            <TextField style={{ backgroundColor: "lightgrey" }} fullWidth variant="filled" size="medium"
                            margin="normal" name="firstName" label="First Name" type="text" value={name}
                            onChange={event => setName(event.target.value)} required/>
                           
                            <TextField style={{ backgroundColor: "lightgrey" }} fullWidth variant="filled" size="medium"
                            margin="normal" name="email" label="Email Id" type="email" value={email}
                            onChange={handleEmailid} required/>
                            <FormHelperText style={{ color: "red" }}>
                                {emailError}
                            </FormHelperText>
                            <TextField style={{ backgroundColor: "lightgrey" }} fullWidth variant="filled" size="medium"
                                margin="normal" name="password" label="Password" type="password" value={password}
                                onChange={handlepass} required/>
                            <FormHelperText style={{ color: "red" }}>
                                {passwordError}
                            </FormHelperText>
                            <Button variant="contained" color="success" onClick={handleSubmit}
                                style={{ marginBottom: "6%", border: "6px", backgroundColor: "blue", width: "55%",}}>
                            <b>Submit</b>
                            </Button>
                            <br />
                            <h5>Link for navigation to Login page</h5><Link href="/login">Login page</Link>
                            <br />
                        </form>
                    </Paper>
                </Grid>
            </Container>


    )

}
export default Registration