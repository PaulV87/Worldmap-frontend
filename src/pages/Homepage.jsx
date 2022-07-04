import React from 'react'
import { useNavigate, } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={()=> navigate("/login")} >Login Page</button>
    
    </div>
  )
}

export default Homepage