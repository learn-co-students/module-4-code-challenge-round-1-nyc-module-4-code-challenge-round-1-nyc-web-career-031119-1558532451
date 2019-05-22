import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(props){
    super(props)
    console.log(this.props)
  }
  renderAllBots=()=>{
    let allBots = this.props.allRobots.map(robot => {
      return(
        <BotCard bot={robot} handleClick={this.props.handleClick}/>
      )
    })
    return allBots
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
          {this.props.allRobots ?
          this.renderAllBots() : <div>"no data"</div>}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
