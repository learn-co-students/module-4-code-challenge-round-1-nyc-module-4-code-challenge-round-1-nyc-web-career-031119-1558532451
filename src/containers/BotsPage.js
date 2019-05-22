import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    armyBots: []
  }
  // add bot to army
  handleBotClick = (sBot) => {
    console.log('clicked', sBot)

    if (sBot.army === false) {

      console.log('here')
      // add to army -- make true
      let bot = this.state.bots.find(bot => {
        return bot.id === sBot.id
      })

      if (!this.state.armyBots.includes(bot)) {
        this.setState({
          armyBots: [...this.state.armyBots, bot]
        })
        
        // map throught find that bot and change its status to true
        this.state.bots.map(botToChange =>{
          if ( botToChange === bot){
            return ({ ...botToChange, army: true })
          }

          return this.setState({
            bots: [...this.state.bots,botToChange]
          })
        })
      }
    } else{
      console.log('here')
      // remove form leist
      

      
      // this.setState({

      // })
    }



  }

  // remove bot from army
  handleRemoveBot = (id) => {
    console.log('clicked', id)

  }

  // fetch components after all compents are finished rendering on the DOM
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(r => r.json())
      .then(bots => {
        let updatedBots = bots.map(bot =>
          ({ ...bot, army: false })
        )
        this.setState({
          bots: updatedBots
        }
        )
      })
  }
  render() {

    console.log(this.state.bots)
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots} />
        <BotCollection bots={this.state.bots} onBotClick={this.handleBotClick} />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
