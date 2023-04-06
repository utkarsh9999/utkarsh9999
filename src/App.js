import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './navbar/Navbar';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


import {
  Routes, 
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
          <div>
            <Routes>
              <Route path="" element={<Home/>} /> 
              <Route path="/dashboard" element={<Dashboard/>} /> 
            </Routes>
          </div>
    </div>
  );
}

export default App;
