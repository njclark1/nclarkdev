import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counters from './components/counter/counters';
import Header from './components/common/header/Header';
import Navbar from './components/common/navbar/Navbar';
import Body from './components/body/Body';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

document.body.style = 'background: whitesmoke;';

ReactDOM.render(
  <React.StrictMode>
    <Header />
     <Navbar />
     <Body />
     <About />
     <Projects />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
