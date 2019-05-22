import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  generateBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} enlistBot={this.props.enlistBot}/>
    });
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.generateBotCards() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
