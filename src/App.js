import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Additem from './Components/Additem';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Registration/>}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/additem" element={<Additem />} />
          <Route exact path="/homepage" element={<Homepage />} />
          
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
