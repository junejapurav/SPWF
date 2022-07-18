import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/header'
import './App.css';
import { Fragment } from 'react';
import GetInvolved from './components/getInvolved';
import Footer from './components/footer';
import Counter from './components/counter';
import Slider from './components/slider';
import RecentEvents from './components/RecentEvents';
import Fundraising from './components/fundraising';
import HomePage from "./MainComponents/HomePage";
import AboutUsPage from './MainComponents/AboutUsPage'
import ContactUsPage from './MainComponents/ContactUsPage'


function App() {
  
  return (
    <div>
      <main>
    
    <Routes>
      
      <Route path = '/' element={<HomePage/>}>
        
      </Route>
      {/* <Route path = '/aboutUs'>
        <Header/>
        <Footer/>
      </Route> */}
      <Route path='/aboutUs' element={<AboutUsPage/>} ></Route>
      <Route path='/contactUs' element={<ContactUsPage/>} ></Route>
    </Routes>
    </main>
    </div>
  );
}

export default App;