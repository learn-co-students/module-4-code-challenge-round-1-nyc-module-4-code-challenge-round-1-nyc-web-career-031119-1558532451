import React from "react";

const BotSearch = (props) => {
  let { names, botClasses, onFormSubmit } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(e.target.class.value)
  }

  return (
    <div className="column sixteen wide" id="bot-form">
      <form className="ui form" onSubmit={handleSubmit}>

        <label name="Classes"/> Filter By Class:
        <select name="class">
          <option>All</option>
          {botClasses.map(name => <option>{name}</option>)}
        </select>

        <br/>
        <input type="submit"/>
      </form>
    </div>
  );

};

export default BotSearch
