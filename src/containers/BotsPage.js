import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  render() {
    return (
      <div>
        {<YourBotArmy botArmy={this.props.botArmy} handleEnlistClick={this.props.handleEnlistClick}/>}
        {<BotCollection
            handleEnlistClick={this.props.handleEnlistClick}
            bots={this.props.bots}
        />}
      </div>
    );
  }

}

export default BotsPage;
