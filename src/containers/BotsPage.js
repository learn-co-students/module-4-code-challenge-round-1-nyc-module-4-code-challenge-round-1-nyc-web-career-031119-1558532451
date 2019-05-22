import React         from "react";
// import {botsJS}      from '../bots.js'
import BotCollection from "./BotCollection";
import YourBotArmy   from "./YourBotArmy";
import BotSpecs      from "../components/BotSpecs";
import { Search } from 'semantic-ui-react'

class BotsPage extends React.Component {
	// URL = 'http://bot-battler-api.herokuapp.com/api/v1/bots';

	state = {
		bots:      [],
		userBots:  [],
		showBot: false,
		displayBot: null,
		searchKeyword: ''
	};

	componentDidMount() {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
			.then(r => r.json())
			.then(data => this.setState({
				bots: data
			}))
	}

	addBotToUser = bot => {
		if (!this.state.userBots.includes(bot)) {
			this.setState(prevState => ({
				userBots: [...prevState.userBots, bot]
			}))
		}
	};

	showBotPage = bot => {
		console.log(bot);
		this.setState({
			showBot: true,
			displayBot: bot
		});
	};

	removeBotFromUser = userBot => {
		this.setState(prevState => ({
			userBots: prevState.userBots.filter(bot => bot !== userBot)
		}))
	};

	// Go back to the BotCollection Page
	goBack = () => {
		this.setState({
			showBot: false
		})
	};

	handleSearch = e => {
		this.setState({
			searchKeyword: e.target.value
		})
	};

	searchedBots = () => {
		return this.state.bots.filter(bot => bot.name.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
		)
	};

	render() {
		return (
			<div>

				<YourBotArmy bots={this.state.userBots} removeBot={this.removeBotFromUser}/>

				<Search onSearchChange={this.handleSearch} showNoResults={false} value={this.state.searchKeyword} />

				{ this.state.showBot ?
					(<BotSpecs goBack={this.goBack} bot={this.state.displayBot} addBot={this.addBotToUser}/>)
				:
					(<BotCollection bots={this.searchedBots()} showBot={this.showBotPage} addBot={this.addBotToUser}/>)
				}

			</div>
		);
	}

}

export default BotsPage;
