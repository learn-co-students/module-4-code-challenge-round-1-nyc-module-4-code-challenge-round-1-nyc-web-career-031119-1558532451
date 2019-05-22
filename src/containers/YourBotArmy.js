import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  handleClick = bot => {
    this.props.removeBot(bot);
  };

  renderBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} handleClick={this.handleClick} />
    })
  };

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { this.renderBots() }
          </div>
        </div>
      </div>
    );
  }
  
}

export default YourBotArmy;
