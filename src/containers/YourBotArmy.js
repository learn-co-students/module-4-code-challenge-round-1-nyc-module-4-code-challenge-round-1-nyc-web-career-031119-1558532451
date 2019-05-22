import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const bots = this.props.bots;

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots.map(b => b.enlisted ? <BotCard
              bot={b}
              key={b.id}
              showSpecs={this.props.enlistDelist}
              /> : null)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
