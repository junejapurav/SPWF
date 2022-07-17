import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
    
  

);
const counters = document.querySelectorAll('.countercolomn h1');
console.log(counters)
  const values = [101,10,90,5];
  counters[1].addEventListener('fullscreenchange',hell);
  function hell(){
    for(let i=0;i<4;i++){
      for(let b = 1;b<values[i];b++){
        counters[i].innerHTML = b.toLocaleString();
      }
    }
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
