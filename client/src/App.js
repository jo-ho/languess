import React from "react";
import { button } from 'reactstrap';

const tries = 2



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
			  alert("win")
        window.location.reload();
		  }
		  else if(this.state.counter < tries){
			  this.setState({counter: this.state.counter+1})

			  alert("lose try again")
		  }
		  else{
			  alert("loser")
        window.location.reload();
		  }
      
		}
    
    render(){
      return(
         
        <>
        <div class = "p-3 mb-2 bg-dark text-light">       

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
</head> 
        
        <div class = "text-primary text-center">English = {this.state.word}  </div>
        <div class = "text-success text-center">Translated = {this.state.translated}</div>
        <p> 

        </p>
        
        <div class = "text-center">
          <div className="btngroup1" class = "btn-group col-sm-8" role = "group" aria-label="...">

            <button type ="button" class="btn btn-outline-light" id = "cs" onClick={e => this.handleInput(e)}> Czech </button>{'  '}
            <button type ="button" class="btn btn-outline-light" id = "fr" onClick={e => this.handleInput(e)}> French </button>{'  '}
            <button type ="button" class="btn btn-outline-light" id = "de" onClick={e => this.handleInput(e)}> German </button>
          </div>
        </div>

        <div class = "text-center">
          <div className="btngroup2" class = "btn-group col-sm-8" role = "group" aria-label="...">
            <button type ="button" class="btn btn-outline-light" id = "it" onClick={e => this.handleInput(e)}>Italian</button>{' '}
            <button type ="button" class="btn btn-outline-light"  id = "no" onClick={e => this.handleInput(e)}>Norwegian</button>{' '}
            <button type ="button" class="btn btn-outline-light" id = "pl" onClick={e => this.handleInput(e)}>Polish</button>

          </div>
        </div>

        <div class = "text-center">
          <div className="btngroup3" class = "btn-group col-sm-8" role = "group" aria-label="...">
            <button type ="button" class="btn btn-outline-light" id = "es" onClick={e => this.handleInput(e)}>Spanish</button>{' '}
            <button type ="button" class="btn btn-outline-light" id = "sv" onClick={e => this.handleInput(e)}>Swedish</button>{' '}
            <button type ="button" class="btn btn-outline-light" id = "tr" onClick={e => this.handleInput(e)}>Turkish</button>

          </div>
        </div>
        </div>

        </>
      );
    }
  }




export default App;
