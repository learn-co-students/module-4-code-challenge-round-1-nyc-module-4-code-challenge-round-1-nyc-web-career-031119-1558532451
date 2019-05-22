import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  generateBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} enlistBot={this.props.enlistBot} inspectBot={this.props.inspectBot} />
    });
  }

  generateBotSpecs = () => {
    return <BotSpecs bot={this.props.inspectedBot} enlistBot={this.props.enlistBot} goBack={this.props.goBack} />
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.props.inspectedBot ? this.generateBotSpecs() : this.generateBotCards() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
