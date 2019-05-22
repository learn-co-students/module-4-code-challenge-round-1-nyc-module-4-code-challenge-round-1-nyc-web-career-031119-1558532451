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
      .then(bots => this.setState(prevState => {
        const addedKey = bots.map(bot => ({...bot, isSpecShown: false}));
        return {bots: [...addedKey]}
      }))
  }

  selectingBot = (event, id) => {
    // event.persist()
    console.log(event.clientY)
    // console.log(id)

    // console.log(selectedBot)
    let selectedBot = this.state.bots.find(bot => bot.id === id)
    if (event.clientY > 300) {
      if (!this.state.myBots.includes(selectedBot)) {
        // console.log("TESTING THE LOGIC")
        this.setState({myBots: [...this.state.myBots, selectedBot]})
        //** WAS GOING TO UPDATE THE THIS.STATE.BOT TO ISHSHOWNPREVEW TO TRUE
        //** AND IN THE BOT COLLECTION, WRITE A TERNARY OPERATOR IN ORDER TO
        //** SHOW THE SELECTED BOT (WOULD RENDER THE BOT SPEC)
      }
    }
    else if (event.clientY < 300){
      // console.log(selectedBot)
      const afterRemovingBotList = this.state.myBots.filter(bots => bots.id !== selectedBot.id)
      this.setState({myBots: afterRemovingBotList})
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} selectingBot={this.selectingBot}/>
        <BotCollection allBots={this.state.bots} selectingBot={this.selectingBot}/>
      </div>
    );
  }

}

export default BotsPage;
