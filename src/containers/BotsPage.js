import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots: [],
    myBots: [],
    recruted: false
  }

componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(res=> res.json())
  .then(bots=>
    this.setState({bots}, ()=>console.log(this.state.bots))
  )
}


handlesAddBotClick = (id) =>{
  console.log('Cheese please', id);
  const bot = this.state.bots.find(bot=> bot.id === id)
  this.setState({myBots: [...this.state.myBots, bot]})//, () => console.log(this.state.myBots))

}

handlesKickBotClick = (id) =>{
  console.log('Outa here!!', id);
  const bot = this.state.myBots.filter(bot=> bot.id !== id)
  this.setState({myBots: bot})
}




  render() {
// console.log(this.state.bots);
    return (
      <div>
      <YourBotArmy myBots={this.state.myBots} onKickBotClick={this.handlesKickBotClick}/>
        <BotCollection bots={this.state.bots} onNewBotClick={this.handlesAddBotClick}/>
      </div>
    );
  }

}

export default BotsPage;
