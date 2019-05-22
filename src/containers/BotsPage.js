import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    viewBot: false,
    prospect: {}
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

    // Finds bot to display specs of
    handleBotClick = (e) => {
      let clickedBot = this.state.bots.find(bot => bot.id == e.target.id)
        this.setState({
          prospect : clickedBot,
          viewBot: true
        })
    }

    // brings back to bot collection page
    handleGoBack = () => {
      this.setState({
        viewBot: false
      })
    }

    // adds bot to army
    handleEnlist = (e) => {
      let clickedBot = this.state.bots.find(bot => bot.id == e.target.id)
      this.state.army.includes(clickedBot) ? 
        console.log("bot already enlisted")
        :
        this.setState({
          army: [...this.state.army, clickedBot],
          viewBot: false
        })
    }

    //removes bot from army. functionality added to BotSpecs
    handleRemove = (e) => {
      let clickedBot = this.state.bots.find(bot => bot.id == e.target.id)
      this.state.army.splice(this.state.army.indexOf(clickedBot),1)
      let cut = this.state.army
      this.setState({
        army: cut
      })
    }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} handleBotClick={this.handleBotClick}/>
        {this.state.viewBot ? 
          <BotSpecs bot={this.state.prospect} handleRemove={this.handleRemove} handleGoBack={this.handleGoBack} handleEnlist={this.handleEnlist} army={this.state.army}/>
          :
          <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick} />}
      </div>
    );
  }

}

export default BotsPage;
