import React from "react";

const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    // Put ID in every div so it can be grabbed regardless of where you click on bot
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        id={bot.id}
        onClick={props.handleBotClick}
      >
        <div className="image" id={bot.id}>
          <img alt="oh no!" src={bot.avatar_url} id={bot.id}/>
        </div>
        <div className="content" id={bot.id}>
          <div className="header" id={bot.id}>
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap" id={bot.id}>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content" id={bot.id}>
          <span>
            <i className="icon heartbeat" id={bot.id}/>
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" id={bot.id}/>
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" id={bot.id}/>
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
