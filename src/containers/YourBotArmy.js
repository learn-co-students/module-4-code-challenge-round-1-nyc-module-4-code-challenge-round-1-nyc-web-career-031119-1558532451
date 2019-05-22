import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const renderMyBots = this.props.myBots.map( bot => {
      return <BotCard bot={bot} key={bot.id} selectingBot={this.props.selectingBot}/>
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {renderMyBots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
