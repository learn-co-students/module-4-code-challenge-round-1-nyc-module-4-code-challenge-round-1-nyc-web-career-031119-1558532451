import React from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      const allBots = data.map(bot => ({
        ...bot, enlisted: false}))
        this.setState({bots: allBots})
    })
  }

  botClickHandler = (id) => {
    const updatedBots = this.state.bots.map(bot =>{
      if(bot.id === id){
        return {...bot, enlisted: true}
      } else {
        return bot
      }
    })
    const filteredBots = this.state.bots.filter(bot => {
      return bot.enlisted === true
    })
    this.setState(prevState => {
      return{
          bots: updatedBots,
          yourArmy: filteredBots
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.bots} yourArmy={this.state.yourArmy}/>
        <BotCollection bots={this.state.bots} botClickHandler={this.botClickHandler}/>
      </div>
    );
  }

}

export default BotsPage;
