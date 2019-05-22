import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  handleClick = (id) => {
    this.props.removeFromArmy(id)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              this.props.myArmy.map(bot => {
                return < BotCard bot={bot} handleClick={this.handleClick}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
