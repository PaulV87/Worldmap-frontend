import axios from "axios";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigate, } from 'react-router-dom';
import { server } from '../config/production';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();


  async function register(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,       
      };

      const res = await axios.post(`${server}/auth/login`, loginData, {withCredentials: "True", Credentials: 'include'});

      console.log(res);
      
      setEmail("")
      setPassword("")      
      console.log("Logged in succesfully")
      navigate("/")
    } catch (err) {
      console.error(err);
      console.log("Logged in failed")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />        
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
