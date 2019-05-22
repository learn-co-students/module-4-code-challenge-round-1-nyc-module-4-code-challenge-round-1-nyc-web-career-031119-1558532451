import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)

    this.state = {
      myBots: [],
      allBots: [],
    }
  }//constructor

componentDidMount(){
  console.log("Component Mounted, Fetch incoming!")
  fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      allBots: data
    })
  })


}//onComponentDidMount

handleClick=(botId)=>{
console.log("bot ID",botId)
 let newBot = this.state.allBots.find(bot => {
   bot.id === botId
 })
  this.setState({
    myBots: newBot
  })
}



  render() {

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy myBots={this.state.myBots} handleClick={this.handleClick}/>
        {this.state.allBots.length > 0 ? <BotCollection allRobots={this.state.allBots} handleClick={this.handleClick}/> : <div>Loading...</div>}
      </div>
    );
  }

}

export default BotsPage;
