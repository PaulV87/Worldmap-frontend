import axios from "axios";
import { useState } from "react";
import { server } from '../config/production';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, } from 'react-router-dom';


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");  
  const navigate = useNavigate();

  async function register() {    

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
      
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <h1>Register an account</h1>
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
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            type="email"
            placeholder="Email"        
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField 
            className="input-field"
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            type="password"
            placeholder="Password"        
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <TextField 
            className="input-field"
            id="outlined-basic" 
            label="Verify Password" 
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
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Register;
