import React from 'react';
import logo from './logo.svg';
import './App.css';


/*create an arrow function

const App = () =>{

  return <WelcomeComponent/>

}

//new component

const WelcomeComponent = () =>{

  return <h1>"Codetrain is awesome, react works!!!"</h1>

}*/


//*updating and replacing week 2 project to use state 


class App extends React.Component {

  state = {
    updating: "Codetrain is awesome, react works!!!"
  }

  render(){
    return(
      <h1> {this.state.updating} </h1>
    )
  }
}



export default App;
