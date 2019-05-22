import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: [],
    army: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      const updatedData = data.map(data => ({...data, enlisted: false}))
      this.setState({bots: updatedData})
    })
  }

  handleClick = (bot) => {
    this.setState({army: [...this.state.army, bot]})
  }

  // handleEnlist = (bot) => {
  //   handleClick = (bot) => {
  //     this.state.bots.map(bot => {
  //       if(bot.enlisted === false){
  //         return this.setState({enlisted: true}))
  //     })
  //
  //     }
  //   }
  // }

  render() {
    const filtered = this.state.bots.filter(bot => {
      return bot.enlisted === false})
    const army = this.state.bots.filter(bot => {
      return bot.enlisted === true})
    return (
      <div className="App">
        <BotsPage handleClick={this.handleClick} bots={filtered} army={this.state.army} handleEnlist={this.handleEnlist}/>
      </div>
    );
  }
}

export default App;
