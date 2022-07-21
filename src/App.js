import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from "./MainComponents/HomePage";
import AboutUsPage from './MainComponents/AboutUsPage'
import ContactUsPage from './MainComponents/ContactUsPage'
import Admin from "./components/Admin/admin";

function App() {
  
  return (
    <div>
      <main>
    
        <Routes>
          <Route path = '/' element={<HomePage/>}></Route>
          <Route path='/aboutUs' element={<AboutUsPage/>} ></Route>
          <Route path='/contactUs' element={<ContactUsPage/>} ></Route>
          <Route path='/admin' element={<Admin/>} ></Route>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;