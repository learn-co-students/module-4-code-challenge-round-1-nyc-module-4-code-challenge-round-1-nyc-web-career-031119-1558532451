import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    const renderAllBots = this.props.allBots.map( bot => {
      return <BotCard bot={bot} key={bot.id} selectingBot={this.props.selectingBot}/>
    })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {renderAllBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
