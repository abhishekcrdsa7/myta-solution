import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';
import Elechrg from './components/class11/science/elechrg';
import EqnofLine from './components/class11/maths/eqnofln';
import RlsOfUSA from './components/class12/sst/rlsofusa';
import Home from './components/home';

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
  <Provider store= {storeWithMiddleware(rootReducer)}>
    <BrowserRouter>
        <div>
          <Route path="/" component={Navbar} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/elechrg" component={Elechrg}/>
          <Route path="/eqnofln" component={EqnofLine}/>
          <Route path="/rlsofusa" component={RlsOfUSA}/>
          <Route exact path="/" component={Home} />
          <Route render={() => {
            return <h1>Not Found!!</h1>
          }} />
        </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
