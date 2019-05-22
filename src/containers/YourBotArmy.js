import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderBotArmy = () => {
    return this.props.botArmy.map(bot => {
      return <BotCard handleEnlistClick={this.props.handleEnlistClick} key={bot.id} bot={bot} />
    })
  }

  render(){
    console.log(this.props.botArmy);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
