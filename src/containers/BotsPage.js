import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const BOTS_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {bots: []};

  componentDidMount(){
    fetch(BOTS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({bots: data}))
  }

  handleBotCardClick = (id) => {
    const selectedBot = this.state.bots.find(bot => bot.id === id);
    selectedBot.enlisted = true;
    console.log("Clicked!! with bot: ", selectedBot);
    this.setState({bots: this.state.bots}); //TODO: refactor using prevState
  }

  render() {
    console.log(this.state);
    const enlistedBots = this.state.bots.filter(bot => bot.enlisted);
    return (
      <div>
        <YourBotArmy bots={enlistedBots} />
        <BotCollection bots={this.state.bots} onBotClick={this.handleBotCardClick} />
      </div>
    );
  }

}

export default BotsPage;
