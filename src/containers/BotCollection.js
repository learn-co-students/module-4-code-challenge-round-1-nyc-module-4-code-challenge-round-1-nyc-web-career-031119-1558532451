import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log(this.props.bots);
      const botSpot = this.props.bots.map(bot=> (<BotCard key={bot.id} bot={bot} onBotClick={this.props.onNewBotClick}/>))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {botSpot}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
