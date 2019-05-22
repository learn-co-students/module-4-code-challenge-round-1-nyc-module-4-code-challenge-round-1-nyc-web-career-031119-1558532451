import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    console.log("CDM")
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(r => r.json())
      .then(data => {
        this.setState({ bots: data,
        }, () => {
          console.log("state",this.state.bots)
        })
      })
    }

    handleBotClick = (e) => {
      let enlisted = this.state.bots.find(bot => bot.id == e.target.id)
      let cut = []
      if (this.state.army.includes(enlisted)) {
        // find index of target bot and cut them out
        this.state.army.splice(this.state.army.indexOf(enlisted),1)
        let cut = this.state.army
        // console.log("cut",cut)
        this.setState({
          army: cut
        })
      } 
      else {
        this.setState({
          army: [...this.state.army, enlisted]
        })
        // console.log("end",this.state.army)
      }

    }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} handleBotClick={this.handleBotClick}/>
        <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick}/>
      </div>
    );
  }

}

export default BotsPage;
