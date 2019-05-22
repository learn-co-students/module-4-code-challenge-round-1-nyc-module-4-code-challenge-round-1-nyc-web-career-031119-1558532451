import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

	handleClick = bot => {
		this.props.showBot(bot);
		// this.props.addBot(bot);
	};

	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} handleClick={this.handleClick} />
		})
	};

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			    { this.renderBots() }
    		</div>
  	  </div>
  	);
  }
}

export default BotCollection;
