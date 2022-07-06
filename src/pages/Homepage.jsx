import {useState} from 'react'
import { useNavigate, } from 'react-router-dom';
import Worldmap from '../components/Worldmap';

function Homepage() {
  const [state, setState] = useState("Hover over a country to see it's name")
  const navigate = useNavigate();
  return (
    <div>
      <h1>Homepage</h1>
      <div>
        {state}
      </div>
        <Worldmap setState={setState} />
     
    
    </div>
  )
}

export default Homepage