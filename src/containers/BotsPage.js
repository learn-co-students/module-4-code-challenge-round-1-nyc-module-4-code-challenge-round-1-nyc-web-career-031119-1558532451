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
    } else {
      alert("Bot already enlisted")
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

  powerUpHealth = (id) =>{
    this.setState({
      bots: this.state.bots.map(bot => {
        if (bot.id === id){
          return {...bot, health: bot.health +1}
        } else {
          return bot
        }
      })
    },() => console.log(this.state.bots))
  }

  powerUpDamage = (id) =>{
    // this.setState({
    //   bots: this.state.bots.map(bot => {
    //     if (bot.id === id){
    //       return {...bot, damage: bot.damage +1}
    //     } else {
    //       return bot
    //     }
    //   })
    // })
  }

  powerUpArmor = (id) =>{
    // bots: this.state.bots.map(bot => {
    //     if (bot.id === id){
    //       return {...bot, armor: bot.armor +1}
    //     } else {
    //       return bot
    //     }
    //   }})
    // })
  }

  render() {
    return (
      <div>
        < YourBotArmy
          myArmy={this.state.myArmy}
          removeFromArmy={this.removeFromArmy}
        />
        < BotCollection
          bots={this.state.bots}
          addToArmy={this.addToArmy}
          powerUpHealth={this.powerUpHealth}
          powerUpDamage={this.powerUpDamage}
          powerUpArmor={this.powerUpArmor}
        />
      </div>
    );
  }

}

export default BotsPage;
