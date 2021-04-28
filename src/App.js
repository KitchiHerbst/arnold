import logo from "./logo.svg";
import "./App.css";
import CardData from "./CardData.js";
import React from "react";
import CardForm from './CardForm.js'

class App extends React.Component {
  state = {
    characters: []
  }

  componentDidMount(){

    fetch('http://localhost:3001/characters')
    .then(res => res.json())
    .then(characterData => this.setState({characters: characterData}))
  }


  createCardData = () => {
    return this.state.characters.map(character => {
      return <CardData character={character} deleteButton={this.deleteCharacter}/>
    })
  }

  deleteCharacter = (character) => {
    fetch(`http://localhost:3001/characters/${character.id}`,{
      method: 'DELETE'
    })
    this.setState({
      characters: this.state.characters.filter((object)=>{ return object != character})
    })
  }

  addCharacter = (character) => {
    fetch('http://localhost:3001/characters',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(character)
    })
    .then(res => res.json())
    .then(newCharacter => 
      this.setState ({
      characters: [...this.state.characters, newCharacter]})   
    )
  }
    render(){
      return (
        <div className="app" id='App'>
          <CardForm addCharacter={this.addCharacter} />
          {this.createCardData()}
        </div>
      );
    }
  }

  export default App 
