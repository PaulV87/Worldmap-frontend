import axios from "axios";
import { useState } from "react";
import { server } from '../config/production';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { validateEmail } from "../utils/UtilFunctions";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");  
  const [errorMessage, setErrorMessage] = useState("");  
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  async function register() {    
    const validEmail = validateEmail(email)   

    if(!validEmail){
      setErrorMessage("Please enter a valid email address")
      setIsError(true)
      return
    }

    if(password.length < 6){
      setErrorMessage("Please enter a password that is at least 6 characters long")
      setIsError(true)
      return
    }

    if(password!==passwordVerify){
      setErrorMessage("Passwords don't match")
      setIsError(true)
      return
    }

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };
      
      await axios.post(`${server}/auth/`, registerData, {withCredentials: "True", Credentials: 'include'});
      
      setEmail("")
      setPassword("")
      setPasswordVerify("")
      
      setErrorMessage("")
      setIsError(false) 

      navigate("/")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <div className="form-container">      
        <h1>Register an account</h1>
        {isError &&  
          <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">{errorMessage}</Alert>
          
          </Stack>
        }
        <Box
          component="form"
          className="input-container"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            className="input-field"
            
            label="Email" 
            variant="outlined" 
            autoComplete="off"
            type="email"
            placeholder="Email"        
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField 
            className="input-field"
            
            label="Password" 
            variant="outlined" 
            autoComplete="off"
            type="password"
            placeholder="Password"        
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <TextField 
            className="input-field"
            
            label="Verify Password" 
            autoComplete="off"
            variant="outlined" 
            type="password"
            placeholder="Verify Password"        
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
          <Button variant="contained" size="medium" onClick={register}>
          Login
          </Button>          
        </Box>
        <span>Already have an account?</span>
        <span onClick={() => navigate("/login")}>Login</span>
      </div>
    </div>
  );
}

export default Register;
