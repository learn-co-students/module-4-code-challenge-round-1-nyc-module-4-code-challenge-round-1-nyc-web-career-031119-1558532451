import React from "react";
import BotCollection from  './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    enlistedBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => this.setState({bots: data}))
  }

  handleBot = (bot, location) => {
    if (!this.state.enlistedBots.includes(bot)){
      this.setState({enlistedBots: [...this.state.enlistedBots, bot]})
    } else if (this.state.enlistedBots.includes(bot) && location === "army"){
      const removedBotArray = this.state.enlistedBots.filter(armyBot => armyBot !== bot)
      this.setState({enlistedBots: removedBotArray})
    }

  }

  render() {

    return (
      <div>
        <YourBotArmy enlistedBots={this.state.enlistedBots} handleBot={this.handleBot}/>
        <BotCollection bots={this.state.bots} handleBot={this.handleBot}/>
      </div>
    );
  }

}

export default BotsPage;
