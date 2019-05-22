import React         from "react";
import { botsJS }    from '../bots.js'
import BotCollection from "./BotCollection";
import YourBotArmy   from "./YourBotArmy";

class BotsPage extends React.Component {
  // URL = 'http://bot-battler-api.herokuapp.com/api/v1/bots';

  state = {
    bots: [],
    userBots: [],
    something: ''
  };

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(r=>r.json()).then(console.log)
    this.setState({
      bots: botsJS
    })
  }

  addBotToUser = bot => {
    if (!this.state.userBots.includes(bot)) {
      this.setState(prevState => ({
        userBots: [...prevState.userBots, bot]
      }))
    // console.log('yeet',bot)

    }
  };

  removeBotFromUser = userBot => {
    this.setState(prevState => ({
      userBots: prevState.userBots.filter(bot => bot !== userBot)
    }))
  };

  render() {
    return (
      <div>

      <YourBotArmy  bots={this.state.userBots} removeBot={this.removeBotFromUser} />

      <BotCollection bots={this.state.bots} addBot={this.addBotToUser} />

      </div>
    );
  }

}

export default BotsPage;
