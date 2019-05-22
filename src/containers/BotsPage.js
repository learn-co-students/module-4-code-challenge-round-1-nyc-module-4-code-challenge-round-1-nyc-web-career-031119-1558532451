import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one



  render() {
    return (

      <div>
      {
        <YourBotArmy army={this.props.army} />
      }
        {<BotCollection bots={this.props.bots}
        handleClick={this.props.handleClick} handleEnlist={this.props.handleEnlist} army={this.props.army}/>
      }
      </div>
    );
  }

}

export default BotsPage;
