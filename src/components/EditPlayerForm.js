import React, { useState, useEffect } from "react";
import Form from "./styles/Form";
import Button from "./styles/Button";

const EditPlayerForm = props => {
  const [player, setPlayer] = useState(props.currentPlayer);

  useEffect(() => {
    setPlayer(props.currentPlayer);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setPlayer({
      ...player,
      [name]: value,
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!player.firstName || !player.lastName || !player.score) return;

    props.updatePlayer(player.id, player);
  };

  const handleStringOnly = event => {
    return (
      (event.charCode > 64 && event.charCode < 91) ||
      (event.charCode > 96 && event.charCode < 123)
    );
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <fieldset>
        <h2>Edit Player Info</h2>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            value={player.firstName}
            onChange={handleInputChange}
            onKeyPress={handleStringOnly}
            required
            autoFocus
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            value={player.lastName}
            onChange={handleInputChange}
            onKeyPress={handleStringOnly}
            required
          />
        </label>
        <label htmlFor="score">
          Score
          <input
            type="number"
            name="score"
            min="0"
            max="100"
            value={player.score}
            onChange={handleInputChange}
            required
          />
        </label>
        <div className="button__container">
          <Button primary type="submit">
            Submit
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default EditPlayerForm;
