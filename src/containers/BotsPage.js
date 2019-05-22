import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  state = {
    bots: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    // .then(console.log)
    .then(data => {
      let bots=data.map(b => ({...b,enlisted:false}));
      this.setState({bots:bots})
    });
  }

  enlistDelist = (id) => {
    // console.log('clicking bot id', id);
    this.setState(prevState => {
      let updatedBots = prevState.bots.map(b => b.id === id ? {...b,enlisted:!b.enlisted} : b);
      return {
        bots: updatedBots
      }
    });
  }

  render() {
    // console.log(this.state.bots);
    return (
      <div>
        {<YourBotArmy
          bots={this.state.bots}
          enlistDelist={this.enlistDelist}
          />}
        {<BotCollection
          bots={this.state.bots}
          enlistDelist={this.enlistDelist}/>}
      </div>
    );
  }
}

export default BotsPage;
