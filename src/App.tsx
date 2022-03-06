
import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.module.css';
import store from './redux/store';
import router from './router';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Route>
            {renderRoutes(router)}
          </Route>

        </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App;
