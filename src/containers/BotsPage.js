import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }


  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => {
      this.setState(
        {bots: data}
      )
    })
  }


  addToArmy = (e) => {
    this.state.bots.forEach(bot => {
      if (bot.id == e.target.id) {
        if (!this.state.botArmy.includes(bot)) {
          this.setState({
            botArmy: [...this.state.botArmy, bot]
          })
        } else if (this.state.botArmy.includes(bot)) {
          let botToRemoveIndex = this.state.botArmy.indexOf(bot)
          this.state.botArmy.splice(botToRemoveIndex, 1)
          this.setState({
            botArmy: [...this.state.botArmy]
          })
        }
      }
    })
  }

  render() {
    return (
      <div>
        {<BotCollection addToArmy={this.addToArmy} bots={this.state.bots}/>}
        {<YourBotArmy botArmy={this.state.botArmy} addToArmy={this.addToArmy}/>}
      </div>
    );
  }

}

export default BotsPage;
