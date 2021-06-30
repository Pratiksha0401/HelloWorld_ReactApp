import './home.css';
import React from 'react';
import logo from '../../assets/BL_logo.jpg'

class Home extends React.Component{ 
  url = 'https://www.bridgelabz.com/'
  constructor(){ 
    super() 
    this.state={ 
      userName: '',
      nameError: ''
    } 
  } 

  //onClick function
  onClick = ($event) =>{
    console.log("save button is clicked",$event)
    window.open(this.url, "_blank")
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-z\\s]{2,}$");
    //set the title using setState method
    this.setState({userName: event.target.value})

    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    }else{
      this.setState({nameError: 'Name is Invalid'})
    }
  }
  

  render(){
    return( 
      <div className="home-main">
      <div className="main"> 
        <h1>Hello {this.state.userName} From BridgeLabz</h1> 
        <img src={logo} onClick={this.onClick}
              alt="The BridgeLabz Logo: a Bridge to Employeement through lab works" />
      
      <div className="text-box">
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <div>
      <p>At Bridgelabz we are tech community</p>
    <ul>
        <li>Technologist</li>
        <li>Thinker</li>
        <li>Builder</li>
    </ul>
    
    <p>Working together to keep tech employability of engineers alive and accessible, so tech companies
        world wide get contributors and creators for technolpgy solutions
    </p>
    
        To know more about us,&nbsp;visit <a href="https://www.bridgelabz.com/" rel="noreference" target="_blank">Bridgelabz</a>
        &nbsp;to learn more about our mission 
    <br />
    <b>i.e.Employability to all</b>
    </div>
    </div> 
      </div>
      );
    }
}
export default Home;