import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './App.css';


function App() {
  return (   
    <>    
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />   
            <Route path='*' element={<NotFound />} />         
          </Routes>
        </div>
      </Router>
     
      
    </>
  )
}

export default App;
