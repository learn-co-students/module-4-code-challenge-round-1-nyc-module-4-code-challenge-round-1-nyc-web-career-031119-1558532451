import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  handleClick = (id) => {
    this.props.addToArmy(id)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
            return < BotCard bot={bot} addToArmy={this.props.addToArmy} handleClick={this.handleClick}/>
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
