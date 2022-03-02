
import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
import './App.module.css';
import store from './redux/store';
import router from './router';



function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(router)}
        </BrowserRouter>
      </Provider>
      
    </div>
  )
}

export default App;
