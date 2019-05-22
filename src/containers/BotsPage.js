import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  state = {
    bots: []
  }

  //start here with your code for step one
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => {
      const updatedBots = bots.map(bot => ({...bot, inArmy: false}))
      this.setState({bots: updatedBots})
    })
  }

  handleEnlistedBot = (id) => {
    this.setState(prevState => {
      return {
        bots: prevState.bots.map(bot => {
          if (bot.id === id) {
            return {...bot, inArmy: true}
          } else {
            return bot
          }
        })
      }
    })
  }

  handleRemove = (id) => {
    const filteredBots = this.state.bots.filter(bot => bots !== id)
    console.log(filteredBots);
        this.setState({bots: filteredBots})
  }

  render() {
    console.log("Bots Page", this.state.bots);
    const chosenBots = this.state.bots.filter(bot => bot.inArmy)
    return (
      <div>
        <YourBotArmy
          bots={this.state.bots}
          chosenBots={chosenBots}
          handleRemove={this.handleRemove}
        />
        <BotCollection
          bots={this.state.bots}
          onEnlistClick={this.handleEnlistedBot}
          />


      </div>
    );
  }

}

export default BotsPage;
