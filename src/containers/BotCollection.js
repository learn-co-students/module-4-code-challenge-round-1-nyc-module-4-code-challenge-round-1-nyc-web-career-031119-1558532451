import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here
  state = {
    botSpecs:false,
    botID: 0
  }

  handleClick = (id) => {
    this.setState({
      botSpecs:true,
      botID: id
    })
  }

  handleBack = () => {
    this.setState({
      botSpecs:false
    })
  }

  handleAdd = (id) => {
    this.props.addToArmy(id)
    this.handleBack()
  }

  findBot = (id) => {
    return this.props.bots.find(bot => {
      return bot.id === id
    })
  }

  handleHealthClick = (id) => {
    this.props.powerUpHealth(id)
  }

  handleDamageClick = (id) => {
    this.props.powerUpDamage(id)
  }

  handleArmorClick = (id) => {
    this.props.powerUpArmor(id)
  }

  render(){
    const foundBot = this.findBot(this.state.botID)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.botSpecs
            ?
              < BotSpecs
                bot={foundBot}
                handleBack={this.handleBack} h
                andleAdd={this.handleAdd}
                handleHealthClick={this.handleHealthClick}
                handleDamageClick={this.handleDamageClick}
                handleArmorClick={this.handleArmorClick}
              />
            : this.props.bots.map(bot => {
              return < BotCard bot={bot} addToArmy={this.props.addToArmy} handleClick={this.handleClick}/>
            })
          }

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
