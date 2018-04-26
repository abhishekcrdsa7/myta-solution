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
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const storeWithMiddleware = applyMiddleware()(createStore(rootReducer));
ReactDOM.render(
  <Provider store= {storeWithMiddleware}>
    <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={App} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
