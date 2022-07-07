import logo from './logo.svg';
import Header from './components/header'
import './App.css';
import { Fragment } from 'react';
import GetInvolved from './components/getInvolved';
import Footer from './components/footer';
import Counter from './components/counter';

function App() {
  return (
    <Fragment>
      <Header/>
      <GetInvolved/>
      <br/>
      <br/>
      <Counter/>
      <Footer/>
    </Fragment>
  );
}

export default App;
