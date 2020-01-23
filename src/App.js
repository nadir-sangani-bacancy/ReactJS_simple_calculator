import React from 'react';
import logo from './logo.svg';
import './App.css';
import Compo from './compo'

class App extends React.Component{
  hellotext = "THIS IS CALLING FROM PARENT COMPONANT .";
  constructor()
  {
    super()
    this.state={
      firstvalue : "",
      secondvalue : "",
      answer : ""
    }
  }
  
  setValue=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  
  operation=(e)=>{
    if(e.target.value === "+")
    return this.setState({answer : Number(this.state.firstvalue)+ Number(this.state.secondvalue)})

    else if(e.target.value === "-")
    return this.setState({answer : Number(this.state.firstvalue)- Number(this.state.secondvalue)})

    else if(e.target.value === "*")
    return this.setState({answer : Number(this.state.firstvalue)* Number(this.state.secondvalue)})

    else if(e.target.value === "/")
    return this.setState({answer : Number(this.state.firstvalue)/ Number(this.state.secondvalue)})
  }

  render(){
    return(
      <div align="center">
        <p>{this.hellotext}</p>
        <Compo s = {this.state} setvalue = {this.setValue} operation = {this.operation}/>
      </div>
    )
  }
}

export default App;
