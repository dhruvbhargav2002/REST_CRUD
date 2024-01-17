// import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import Dept from './component/Department/Dept';
import Empl from './component/Employe/Empl';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/department" element={<Dept/>}/>
    <Route exact path="/employe" element={<Empl/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
    
  );
}

export default App;
