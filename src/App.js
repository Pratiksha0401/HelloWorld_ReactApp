import './App.css';
import React from 'react';
import logo from './assets/BL_logo.jpg'

class App extends React.Component{ 
  url = 'https://www.bridgelabz.com/'
  constructor(){ 
    super() 
    this.state={ 
      title:'Hello From BridgeLabz' 
    } 
  } 

  //onClick function
  onClick = ($event) =>{
    console.log("save button is clicked",$event)
    window.open(this.url, "_blank")
  }

  render(){
    return( 
      <div> 
        <h1>{this.state.title}</h1> 
        <img src={logo} onClick={this.onClick}
              alt="The BridgeLabz Logo: a Bridge to Employeement through lab works" />
      </div> 
      );
    }
}
export default App;