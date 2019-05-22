import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    const bots = this.props.bots;

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map(b => b.enlisted ? null : <BotCard bot={b} key={b.id} click={this.props.click}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
