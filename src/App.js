import './App.css';
import React from 'react';
import logo from './assets/BL_logo.jpg'

class App extends React.Component{ 
  constructor(){ 
    super() 
    this.state={ 
      title:'Hello From BridgeLabz' 
    } 
  } 
  render(){
    return( 
      <div> 
        <h1>{this.state.title}</h1> 
        <img src={logo} 
              alt="The BridgeLabz Logo: a Bridge to Employeement through lab works" />
      </div> 
      );
    }
}
export default App;