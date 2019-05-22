import React from "react";
import BotCollection from  './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    // all bots
    bots: [],
    // your army
    enlistedBots: [],
    // a bot from the collection to look at its specs
    chosenBot : {}
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => this.setState({bots: data}))
  }

  handleBot = (bot, location) => {
    // if the bot is not in your army
    if (!this.state.enlistedBots.includes(bot) && location === "collection"){
      this.setState({enlistedBots: [...this.state.enlistedBots, bot], chosenBot: {} })
      // if the bot is in your army
    } else if (this.state.enlistedBots.includes(bot) && location === "army"){
      const removedBotArray = this.state.enlistedBots.filter(armyBot => armyBot !== bot)
      this.setState({enlistedBots: removedBotArray})
      // if you are looking at their specs, but don't want them in your army
    } else if (location === "go back") {
      this.setState({ chosenBot: {} })
    }
  }

  handleSelectedBot = (bot, location) => {
    this.setState({chosenBot: bot})
  }

  render() {

    return (
      <div>
        {/* does not show any army if you do not have an army */}
        {this.state.enlistedBots[0] ? <YourBotArmy enlistedBots={this.state.enlistedBots} handleBot={this.handleBot}/> : null }
        {/* does not show this if you did not click on a bot in the collection */}
        {this.state.chosenBot.name ? <BotSpecs bot={this.state.chosenBot} handleBot={this.handleBot}/> : null}
        {/* does not show this when you click on a bot in the collection */}
        {this.state.chosenBot.name ? null : <BotCollection bots={this.state.bots} handleBot={this.handleSelectedBot}/>}
      </div>
    );
  }

}

export default BotsPage;
