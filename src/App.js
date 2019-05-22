import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = { bots: [], botArmy: [] }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => this.setState( { bots: data } ))
  }

    handleEnlistClick = (bot) => {
      this.findBot(bot) ? this.deEnlistBot(bot) : this.enlistBot(bot)
    }

    enlistBot = (bot) => {
      this.setState({
          botArmy: [...this.state.botArmy, bot],
          bots:  this.filterEnlistedBots(this.state.bots, bot.id)
        })
    }

    deEnlistBot = (bot) => {
      this.setState({
          botArmy: this.filterEnlistedBots(this.state.botArmy, bot.id),
          bots:  [...this.state.bots, bot]
        })
    }

    filterEnlistedBots = (bots, id) => {
      return bots.filter(bot => {
        return bot.id !== id
      })
    }

    findBot = (bot) => {
      return this.state.botArmy.find(b => b.id === bot.id)
    }

    render() {
      return (
        <div className="App">
        <BotsPage
          filterEnlistedBots={this.filterEnlistedBots}
          bots={this.state.bots}
          botArmy={this.state.botArmy}
          handleEnlistClick={this.handleEnlistClick}
          handleBotArmyClick={this.handleBotArmyClick}
        />
        </div>
      );
    }
  }

  export default App;
