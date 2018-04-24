import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import App from './App';
import Login from './components/login';
import Register from './components/register';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={App} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
    </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
