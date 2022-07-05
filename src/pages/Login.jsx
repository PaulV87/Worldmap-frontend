import axios from "axios";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigate, } from 'react-router-dom';
import { server } from '../config/production';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();
 


  async function login() {   
    try {
      const loginData = {
        email,
        password,       
      };

      const res = await axios.post(`${server}/auth/login`, loginData, {withCredentials: "True", Credentials: 'include'});
     
      setEmail("")
      setPassword("")      
      
      navigate("/")
    } catch (err) {
      console.error(err);      
    }
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <h1>Login</h1>        
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
          <Button variant="contained" size="medium" onClick={login}>
           Login
          </Button>          
        </Box>
        <span>Don't have an account?</span>
        <a href="/register">Register</a>
        
      </div>
    </div>
  );
}

export default Login;
