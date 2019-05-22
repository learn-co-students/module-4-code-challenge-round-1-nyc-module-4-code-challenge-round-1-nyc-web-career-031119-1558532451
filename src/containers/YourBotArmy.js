import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderArmyBots = () => {
    this.props.yourArmy.map(bot => {
      <BotCard bot={bot} />
    })
    return
  }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.renderArmyBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
