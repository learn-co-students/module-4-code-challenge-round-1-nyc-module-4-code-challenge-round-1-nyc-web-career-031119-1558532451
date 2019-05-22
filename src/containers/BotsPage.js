import React from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

const BOT_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    inpectedBot: null
  }

  componentDidMount() {
    fetch(BOT_URL)
    .then(res => res.json())
    .then(botsData => {
      const newBots = botsData.map(bot => {
        return {...bot, enlisted: false}
      });
      this.setState({ bots: newBots })
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  enlistBot = (clickedBot) => {
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === clickedBot.id) {
        return {...bot, enlisted: true}
      } else {
        return bot
      }
    });
    this.setState({
      bots: updatedBots,
      inspectedBot: null
     });
  }

  dischargeBot = (clickedBot) => {
    const updatedBots = this.state.bots.map(bot => {
      if (bot.id === clickedBot.id) {
        return {...bot, enlisted: false}
      } else {
        return bot
      }
    });
    this.setState({ bots: updatedBots });
  }

  inspectBot = (clickedBot) => {
    this.setState({ inspectedBot: clickedBot })
  }

  goBack = () => {
    this.setState({ inspectedBot: null })
  }

  render() {
    const filteredBots = this.state.bots.filter(bot => {
      return bot.enlisted
    });
    console.log("All bots: ", this.state.bots);
    console.log("Enlisted Bots: ", filteredBots);
    console.log("Inspected Bot: ", this.state.inspectedBot);
    return (
      <div>
        <YourBotArmy bots={filteredBots} dischargeBot={this.dischargeBot} />
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} inspectBot={this.inspectBot} inspectedBot={this.state.inspectedBot} goBack={this.goBack} />
      </div>
    );
  }

}

export default BotsPage;
