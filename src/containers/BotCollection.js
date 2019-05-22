import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  //your code here

  render(){
    console.log("Bot Collection", this.props);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
            return <BotCard id={bot.id} bot={bot} key={bot.id} onEnlistClick={this.props.onEnlistClick}/>
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
