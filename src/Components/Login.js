import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  FormHelperText,
  TextField,
  Button,
  Paper,
  Container,
  Link,
} from "@mui/material";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import axios from "axios";

function Login() {
  const [email, setemailid] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, seterrorLogin] = useState("");
  const [emailError, setemailidError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  function handleEmailid(event) {
    seterrorLogin("");
    const email = event.target.value;
    const regexofemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.trim()) {
      setemailidError("Email is not correct");
    } else if (!regexofemail.test(email)) {
      setemailidError("Email is not correct");
    } else {
      setemailidError("");
    }
    setemailid(email);
  }
  function handlepass(event) {
    seterrorLogin("");
    const passwordValue = event.target.value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordValue.trim()) {
      setPasswordError("Passord is incorrect");
    } else if (!passwordRegex.test(passwordValue)) {
      const err = "Error";

      setPasswordError(err);
    } else {
      setPasswordError("");
    }
    setPassword(passwordValue);
  }

  const handleSubmit = async () => {
    axios
      .get(
        "https://qx3tu3fg4ufoak7jimxat7b74i0zkhda.lambda-url.us-east-1.on.aws/"
      )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", JSON.stringify(response.data));

        // console.log(response.status);
      });
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    localStorage.setItem("emails", email);
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSucess: ", data);
        navigate("/additem");
      },
      onFailure: (err) => {
        alert("Error is thrown: ", err);
        console.error("onFailure:", err);
      },
      newPasswordRequired: (data) => {
        console.log("new Password Required: ", data);
      },
    });
  };

  return (
    <Container maxWidth="md">
      <br />
      <Grid item style={{}}>
        <Paper
          elevation={18}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <form style={{ margin: "5%" }}>
            <br />
            <Typography variant="h5" style={{ padding: "2%" }}>
              <b>Login </b>
            </Typography>
            <FormHelperText style={{ color: "red" }}>
              {errorLogin}
            </FormHelperText>

            <TextField
              style={{ backgroundColor: "lightgrey" }}
              fullWidth
              variant="filled"
              size="medium"
              margin="normal"
              name="email"
              label="Email Id"
              type="email"
              value={email}
              onChange={handleEmailid}
              required
            />
            <FormHelperText style={{ color: "red" }}>
              {emailError}
            </FormHelperText>
            <TextField
              style={{ backgroundColor: "lightgrey" }}
              fullWidth
              variant="filled"
              size="medium"
              margin="normal"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlepass}
              required
            />
            <FormHelperText style={{ color: "red" }}>
              {passwordError}
            </FormHelperText>
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmit}
              style={{
                marginBottom: "6%",
                border: "6px",
                backgroundColor: "blue",
                width: "55%",
              }}
            >
              <b>Submit</b>
            </Button>
            <h5>Link for navigation to registration page</h5>
            <Link href="/">Registration page</Link>
            <br />
          </form>
        </Paper>
      </Grid>
    </Container>
  );
}
export default Login;
