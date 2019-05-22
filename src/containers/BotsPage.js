import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    bots: [],
    myArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  addToArmy = (id) => {
    if (!this.state.myArmy.find(bot => bot.id === id)){
      this.setState({
        myArmy: [
          ...this.state.myArmy,
          this.state.bots.find(bot => bot.id === id)
        ]
      }, ()=> console.log(this.state.myArmy))
    }
  }

  removeFromArmy = (id) => {
    const updatedArmy = this.state.myArmy.filter(bot => {
      if (bot.id !== id){
        return bot
      }
    })

    this.setState({
      myArmy: updatedArmy
    })
  }

  render() {
    return (
      <div>
        < YourBotArmy myArmy={this.state.myArmy} removeFromArmy={this.removeFromArmy}/>
      < BotCollection bots={this.state.bots} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
