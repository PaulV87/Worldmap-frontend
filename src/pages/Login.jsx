import axios from "axios";
import { useState } from "react";
import { useNavigate, } from 'react-router-dom';
import { server } from '../config/production';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { validateEmail } from "../utils/UtilFunctions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [errorMessage, setErrorMessage] = useState("");  
  const [isError, setIsError] = useState(false);
 
  const navigate = useNavigate();

  
  async function login() {   
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
    try {
      const loginData = {
        email,
        password,       
      };

      await axios.post(`${server}/auth/login`, loginData, {withCredentials: "True", Credentials: 'include'});
     
      setEmail("")
      setPassword("")     
      setErrorMessage("")
      setIsError(false) 
      
      navigate("/")
    } catch (err) {
      console.error(err);   
      
      setErrorMessage("Invalid username or password")
      setIsError(true)  
    }
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <h1>Login</h1>     
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
            id="outlined-basic-email-field" 
            label="Email" 
            variant="outlined" 
            type="email"
            placeholder="Email"    
            autoComplete="off"    
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField             
            className="input-field"
            id="outlined-basic-password-field" 
            label="Password" 
            variant="outlined" 
            type="password"
            autoComplete="off"
            placeholder="Password"        
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button variant="contained" size="medium" onClick={login}>
           Login
          </Button>          
        </Box>
        <span>Don't have an account?</span>
        <span onClick={() => navigate("/register")}>Register</span>
        
      </div>
    </div>
  );
}

export default Login;
