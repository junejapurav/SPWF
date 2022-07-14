import logo from './logo.svg';
import Header from './components/header'
import './App.css';
import { Fragment } from 'react';
import GetInvolved from './components/getInvolved';
import Footer from './components/footer';
import Counter from './components/counter';
import Slider from './components/slider';
import RecentEvents from './components/RecentEvents';
import Fundraising from './components/fundraising';


function App() {
  
  return (
    <Fragment>
      <Header/>
      <Slider/>
      <GetInvolved/>
      <br/>
      <br/>
      <Counter/>
      <Fundraising/>
      <RecentEvents/>
      <Footer/>
    </Fragment>
  );
}

export default App;
