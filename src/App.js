import {
  Routes,
  Route,
 
 
} from "react-router-dom";

import './App.css';
import HomePage from "./MainComponents/HomePage";
import AboutUsPage from './MainComponents/AboutUsPage'
import ContactUsPage from './MainComponents/ContactUsPage'

import Admin from "./components/Admin/admin";

import Donation from "./MainComponents/donation";
import AdminLogin from "./MainComponents/AdminLogin";
import ShowContactUsDataMain from "./components/Admin/ShowContactUsDataMain";
import ShowVolunteerDataMain from './components/Admin/ShowVolunteerDataMain'
import VolunteerForm from "./components/VolunteerForm";
import Shiksharth from "./components/shiksharth";
import ShowDonationDataMain from './components/Admin/ShowDonationDataMain'
import Aahar from "./components/Aahar";
import KaushalUthan from "./components/KaushalUthan";
import Chikitsa from "./components/Chikitsa"



function App() {
  
  return (
    <div>
      <main>
    
        <Routes>
         
         
          <Route path = '/' element={<HomePage/>}></Route>
          <Route path='/aboutUs' element={<AboutUsPage/>} ></Route>
          <Route path='/contactUs' element={<ContactUsPage/>} ></Route>

          <Route path='/admin' element={<Admin/>} ></Route>

          <Route path='/donation' element={<Donation/>}></Route>
          <Route path='/login' element={<AdminLogin/>}></Route>
          <Route path='/login/contact-us-data' element={<ShowContactUsDataMain />}></Route>
          <Route path='/login/volunteer-data' element={<ShowVolunteerDataMain />}></Route>
          <Route path='/login/donation-data' element={<ShowDonationDataMain />}></Route>

    
          <Route path='/volunteer' element={<VolunteerForm/>}></Route>
          <Route path='/Shiksharth' element={<Shiksharth/>}></Route>
          <Route path="/Aahar" element={<Aahar/>}></Route>
          <Route path="/KaushalUthan" element={<KaushalUthan/>}></Route>
          <Route path="/Chikitsa" element={<Chikitsa/>}></Route>

       
        </Routes>
       
      </main>
    </div>
  );
}

export default App;