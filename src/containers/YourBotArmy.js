import React from "react";
import BotCard from "../components/BotCard";
// import BotArmy from "../components/BotArmy"

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/
              this.props.army.map(bot => {
                  return <BotCard bot={bot}/>
              })
              }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
