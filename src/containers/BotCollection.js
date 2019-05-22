import React from "react";
import BotCard from "../components/BotCard";

//Can Be Functional
class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} onBotClick={this.props.onBotClick}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
