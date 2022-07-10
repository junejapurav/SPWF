import logo from './logo.svg';
import Header from './components/header'
import './App.css';
import { Fragment } from 'react';
import GetInvolved from './components/getInvolved';
import Footer from './components/footer';
import Counter from './components/counter';
<<<<<<< HEAD
import RecentEvents from './components/RecentEvents'
=======
import Fundraising from './components/fundraising';
>>>>>>> 0c93b5cc41b4db86ff38d7f56cfef31f5513e3da

function App() {
  return (
    <Fragment>
      <Header/>
      <GetInvolved/>
      <br/>
      <br/>
      <Counter/>
<<<<<<< HEAD
      <RecentEvents/>
=======
      <Fundraising/>
>>>>>>> 0c93b5cc41b4db86ff38d7f56cfef31f5513e3da
      <Footer/>
    </Fragment>
  );
}

export default App;
