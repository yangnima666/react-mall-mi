import React from 'react';
// import logo from './logo.svg';
import './App.module.css';
import AppRouter from './router';



class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        
        <AppRouter></AppRouter>
      </div>
    );
  }

}

export default App;
