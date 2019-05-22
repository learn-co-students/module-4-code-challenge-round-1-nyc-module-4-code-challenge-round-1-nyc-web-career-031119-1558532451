import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import TypeFilter from '../components/TypeFilter';

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  state = {
    all: [],
    bots: [],
    value: ''
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    // .then(console.log)
    .then(data => {
      let bots=data.map(b => ({...b,enlisted:false}));
      this.setState({bots:bots});
      this.setState({all:bots});
    });
  }

  enlistDelist = (id) => {
    // console.log('clicking bot id', id);
    this.setState(prevState => {
      let updatedBots = prevState.all.map(b => b.id === id ? {...b,enlisted:!b.enlisted} : b);
      return {
        all: updatedBots,
        bots: updatedBots
      }
    });
  }

  filterByType = (e) => {
    let type = e.target.value;
    this.setState({value:type});
    let filteredBots = this.state.all.filter(b => b.bot_class === type);
    type === 'All' ?
    this.setState({bots:this.state.all})
    :
    this.setState(prevState => ({bots: filteredBots}));
  }

  render() {
    // console.log(this.state.value);
    // console.log(this.state.bots);
    return (
      <div>
        {<YourBotArmy
          bots={this.state.all}
          enlistDelist={this.enlistDelist}
        />}
        {<TypeFilter
          filter={this.filterByType}
          value={this.state.value}
        />}
        {<BotCollection
          bots={this.state.bots}
          enlistDelist={this.enlistDelist}
        />}
      </div>
    );
  }
}

export default BotsPage;
