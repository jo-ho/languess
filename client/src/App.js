import React from "react";
import {Button, ButtonGroup, Alert} from 'reactstrap'
import './App.css'

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
          language: data.language,
          gameEnd: false,
          gameWin: false
        })
    }




    handleInput(e){

      e.target.disabled = true
		  if(e.target.id === this.state.language){
			  this.setState({gameWin: true})
		  }
		  else if(this.state.counter < tries){
			  this.setState({counter: this.state.counter+1})
		  }
		  else{
			  this.setState({gameEnd: true})
		  }

		}

    renderAlert() {

      const gameEnd = this.state.gameEnd
      const gameWin = this.state.gameWin
      if (gameWin) {
        return <Alert className="d-inline" color="success ">You Win!</Alert>
      } else if (gameEnd) {
        return <Alert className="d-inline" color="danger">You lose</Alert>
      } else if (this.state.counter === 0) {
        return ""
      } else {
        return <Alert className="d-inline" color="warning">Try Again, {tries - this.state.counter} tries left</Alert>
      }


    }

    render(){


      return(

        <div class = "main p-3 mb-2 bg-dark text-light">


<div className="py-4">
        <div class = "text-primary text-center">English = {this.state.word}  </div>
        <div class = "text-success text-center">Translated = {this.state.translated}</div>
        </div>
        <div class = "text-center">
        {this.renderAlert()}


        {this.state.word ?

        <div className="py-4">
        <div className = " text-center">
          <ButtonGroup className='col-sm-8'>

            <Button type ="button" outline  id = "cs" onClick={e => this.handleInput(e)}> Czech </Button>{'  '}
            <Button type ="button" outline id = "fr" onClick={e => this.handleInput(e)}> French </Button>{'  '}
            <Button type ="button" outline id = "de" onClick={e => this.handleInput(e)}> German </Button>
        </ButtonGroup>
        </div>
        <div class = "text-center">
          <ButtonGroup className='col-sm-8'>
            <Button type ="button" outline id = "it" onClick={e => this.handleInput(e)}>Italian</Button>{' '}
            <Button type ="button" outline  id = "no" onClick={e => this.handleInput(e)}>Norwegian</Button>{' '}
            <Button type ="button" outline id = "pl" onClick={e => this.handleInput(e)}>Polish</Button>

          </ButtonGroup>
        </div>

        <div class = "text-center">
          <ButtonGroup className='col-sm-8'>
            <Button type ="button" outline id = "es" onClick={e => this.handleInput(e)}>Spanish</Button>{' '}
            <Button type ="button" outline id = "sv" onClick={e => this.handleInput(e)}>Swedish</Button>{' '}
            <Button type ="button" outline id = "tr" onClick={e => this.handleInput(e)}>Turkish</Button>

          </ButtonGroup>
        </div>
        </div>


        : <div class = "text-primary text-center">Retrieving word... </div>}
</div>

        <div class = "text-center">
        {this.state.gameEnd || this.state.gameWin ?
        <Button onClick={() => window.location.reload()}>Play again</Button>
      : ""}
</div>

        </div>


      );
    }
  }




export default App;
