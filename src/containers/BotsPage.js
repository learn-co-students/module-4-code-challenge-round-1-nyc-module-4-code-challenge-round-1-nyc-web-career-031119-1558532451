import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(bots => this.setState({bots: [...this.state.bots, ...bots]}))
  }

  selectingBot = (id) => {
    // console.log(id)
    const selectedBot = this.state.bots.find(bot => bot.id === id)
    // console.log(selectedBot)
    if (!this.state.myBots.includes(selectedBot)) {
      // console.log("TESTING THE LOGIC")
      this.setState({myBots: [...this.state.myBots, selectedBot]})
    } else {
      const afterRemovingBotList = this.state.myBots.filter(bots => bots.id !== selectedBot.id)
      this.setState({myBots: afterRemovingBotList})
    }
  }

  render() {
    // console.log(this.state.bots)
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} selectingBot={this.selectingBot}/>
        <BotCollection allBots={this.state.bots} selectingBot={this.selectingBot}/>
      </div>
    );
  }

}

export default BotsPage;
