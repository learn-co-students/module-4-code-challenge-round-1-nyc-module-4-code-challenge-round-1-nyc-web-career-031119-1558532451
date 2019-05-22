import React from "react";
import BotCard from "../components/BotCard";
import BotSearch from "../components/BotSearch";

//Can Be Functional
class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          <BotSearch names={null} botClasses={this.props.botClasses} onFormSubmit={this.props.onFormSubmit}/>
          {this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} onBotClick={this.props.onBotClick}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
