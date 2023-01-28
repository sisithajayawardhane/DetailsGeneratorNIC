import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Register from './Register';
import First from './First';
import Login from './Login';
import DetailsGenerator from './DetailsGenerator';

function App() {
  return (
    <Router>
      <div> 
        <Routes> 
          <Route path="/register" element = {<Register/>}/>
          <Route path="/details" element = {<DetailsGenerator/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/" element = {<First/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
