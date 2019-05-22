import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
  state = {
    displaySpecs: false,
    bot: null
  }

  showSpecs = (id) => {
    this.setState({
      displaySpecs:!this.state.displaySpecs,
      bot: this.props.bots.find(b => b.id === id)
    });
  }

  render(){
    const bots = this.props.bots;
    const botCards = bots.map(b => b.enlisted ? null : <BotCard
      bot={b}
      key={b.id}
      enlistDelist={this.props.enlistDelist}
      showSpecs={this.showSpecs}
    />);
    const botSpecs = <BotSpecs
      bot={this.state.bot}
      showSpecs={this.showSpecs}
      enlistDelist={this.props.enlistDelist}
    />;

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.state.displaySpecs ? botSpecs : botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
