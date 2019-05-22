import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy"

class BotCollection extends React.Component {
  //your code here
  renderBots = () =>{
    this.props.bots.map(bot =>{
    return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>})
  }

  renderArmy = () => {
    this.props.army.map(bot => {
      return <YourBotArmy key={bot.id} army={bot} />})
  }

  render(){
    // console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/
            this.props.bots.map(bot =>{
            return (

              <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} handleEnlist={this.props.handleEnlist}/> )

            })



          }
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
