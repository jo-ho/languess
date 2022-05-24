import React from "react";



const tries = 3



  class App extends React.Component{

    constructor(props) {
      super(props);
      this.state = {word: "",translated: "", language: "", counter: 0};

    }

    async componentDidMount() {
        const response = await fetch('/word')
        const data = await response.json()

        this.setState({
          word: data.word,
          translated: data.translated,
          language: data.language
        })
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

          <button id = "cs" onClick={e => this.handleInput(e)}>Czech</button>
          <button id = "fr" onClick={e => this.handleInput(e)}>French</button>
          <button id = "de" onClick={e => this.handleInput(e)}>German</button>

        </center>
        <center className="btngroup2">
          <button id = "it" onClick={e => this.handleInput(e)}>Italian</button>
          <button id = "no" onClick={e => this.handleInput(e)}>Norwegian</button>
          <button id = "pl" onClick={e => this.handleInput(e)}>Polish</button>

        </center>
        <center className="btngroup3">
          <button id = "es" onClick={e => this.handleInput(e)}>Spanish</button>
          <button id = "sv" onClick={e => this.handleInput(e)}>Swedish</button>
          <button id = "tr" onClick={e => this.handleInput(e)}>Turkish</button>

        </center>

        </>
      );
    }
  }




export default App;
