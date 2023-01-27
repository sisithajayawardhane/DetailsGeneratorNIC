import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Register from './Register';
import First from './First';
import Login from './Login';

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element = {<First/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/login" element = {<Login/>}/>

  
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
