import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

//Bots API Endpoint
const BOTS_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  /**************************************/
      //set up initial state
  /**************************************/
  state = {
    bots: [],
    details: {on: false, bot:{}}
  };

/**************************************/
    //Lifecyle Methods
/**************************************/
  componentDidMount(){
    fetch(BOTS_URL)
    .then(resp => resp.json())
    .then(data => this.setState({bots: data}))
  }

/**************************************/
    //Event Handlers
/**************************************/
  handleBotCardClick = (id) => {
    const selectedBot = this.state.bots.find(bot => bot.id === id);
    this.setState( {details: {on: true, bot: selectedBot} } )

    // const selectedBot = this.state.bots.find(bot => bot.id === id);
    // selectedBot.enlisted = true;
    // console.log("Clicked!! with bot: ", selectedBot);
    // this.setState({bots: this.state.bots}); //TODO: refactor using prevState
  }

  handleBackClick = () => this.setState( {details: {on: false, bot: {} } })

  handleEnlistClick = (id) => {
    console.log("Clicked!! with bot id: ", id);
    const selectedBot = this.state.bots.find(bot => bot.id === id);
    selectedBot.enlisted = true;
    this.setState({bots: this.state.bots}); //TODO: refactor using prevState
    this.handleBackClick();
  }

//End Event Handlers

/* ***********************************
    //Render
**************************************/
  render() {
    console.log(this.state);
    const enlistedBots = this.state.bots.filter(bot => bot.enlisted);
    return (
      <div>
        <YourBotArmy bots={enlistedBots} />
        {this.state.details.on ?
          <BotSpecs bot={this.state.details.bot} onEnlistClick={this.handleEnlistClick} onBackClick={this.handleBackClick}/>
          :<BotCollection bots={this.state.bots} onBotClick={this.handleBotCardClick} />
        }
      </div>
    );
  }

}

export default BotsPage;
