import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log("Your Bot Army", this.props.chosenBots);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.chosenBots.map((bot, i) => {
              return <BotCard id={bot.id} bot={bot} key={bot.id} handleRemove={this.props.handleRemove}/>
            })
            }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
