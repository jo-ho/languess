import React from "react";



const tries = 3

  
  
  class App extends React.Component{

    constructor(props) {
      super(props);
      this.state = {word: 'cheese',translated: 'fromage', language: 'French', counter: 0};
      
    }

    
    handleInput(e){
		
		  if(e.target.id === this.state.language){
			console.log("win")
		  }
		  else if(this.state.counter < tries){
			this.setState({counter: this.state.counter+1})

			console.log("lose try again")
		  }
		  else{
			console.log("loser")
		  }
		}    
    render(){
      return(
        <>
        <center>{this.state.word}</center>
        <center>{this.state.translated}</center>

  
        <center className="btngroup1">

          <button id = "Czech" onClick={e => this.handleInput(e)}>Czech</button>
          <button id = "French" onClick={e => this.handleInput(e)}>French</button>
          <button id = "German" onClick={e => this.handleInput(e)}>German</button>

        </center>
        <center className="btngroup2">
          <button id = "Italian" onClick={e => this.handleInput(e)}>Italian</button>
          <button id = "Norwegian" onClick={e => this.handleInput(e)}>Norwegian</button>
          <button id = "Polish" onClick={e => this.handleInput(e)}>Polish</button>

        </center>
        <center className="btngroup3">
          <button id = "Spanish" onClick={e => this.handleInput(e)}>Spanish</button>
          <button id = "Swedish" onClick={e => this.handleInput(e)}>Swedish</button>
          <button id = "Turkisk" onClick={e => this.handleInput(e)}>Turkish</button>

        </center>

        </>
      );
    }
  }

  


export default App;