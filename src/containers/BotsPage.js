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
    details: {on: false, bot:{}},
    filter: {on: false, botClass: ""}
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

  handleFormSubmit = (botClass) => {
    console.log("Submitted!! with class name: ", botClass);
    if (botClass === "All") {
      this.setState({filter: {on: false, botClass: ""}});
    } else {
      this.setState({filter: {on: true, botClass: botClass}});
    }
  }

//End Event Handlers

/* ***********************************
    //Render
**************************************/
  render() {
    console.log(this.state);
    const enlistedBots = this.state.bots.filter(bot => bot.enlisted);

    const filterTheBots = () => {
      if (this.state.filter.on) {
        return this.state.bots.filter(bot => bot.bot_class === this.state.filter.botClass);
      } else {
        return this.state.bots
      }
    }

    // const botClasses = this.state.filter

    const botClasses = [...new Set(this.state.bots.map(bot => bot.bot_class))]

    return (
      <div>
        <YourBotArmy bots={enlistedBots} onBotClick={this.handleBotCardClick} />
        {this.state.details.on ?
          <BotSpecs bot={this.state.details.bot} onEnlistClick={this.handleEnlistClick} onBackClick={this.handleBackClick}  />
          :<BotCollection bots={filterTheBots()} onBotClick={this.handleBotCardClick} botClasses={botClasses} onFormSubmit={this.handleFormSubmit}/>
        }
      </div>
    );
  }

}

export default BotsPage;
