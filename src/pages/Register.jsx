import axios from "axios";
import { useState } from "react";
import { server } from '../config/production';


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  


  async function register(e) {
    e.preventDefault();

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
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Verify your password"
          autoComplete="off"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
