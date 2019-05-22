import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots: [],
    myBots: [],

  }

componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(res=> res.json())
  .then(bots=>{
    const updatedRobot = bots.map(bot => {return {...bot, recruted: false}})
    this.setState({bots: updatedRobot}, ()=>console.log(this.state.bots))}
  )
}


handlesAddBotClick = (id) =>{
  console.log('Cheese please', id);
  const bot = this.state.bots.find(bot=> bot.id === id)
  console.log(bot.recruted);
  if (bot.recruted === false){
//trying to get this validation to work.
//set an updated recruted stat. just need a bit more time to work out the kinks of the if and setState recruted feature.
    this.setState({myBots: [...this.state.myBots, bot]})//, () => console.log(this.state.myBots))

    this.setState({recruted: true}, () => console.log(this.state.recruted))


  }


}

handlesKickBotClick = (id) =>{
  console.log('Outa here!!', id);

  const bot = this.state.myBots.filter(bot=> bot.id !== id)
  this.setState({myBots: bot})

  this.setState({recruted: false}, () => console.log(this.state.recruted))

}

handlesButtonValid = () =>{
  console.log('Did i get it????');
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
