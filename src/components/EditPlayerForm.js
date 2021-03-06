import React, { useState, useEffect } from "react";
import Form from "./styles/Form";
import Button from "./styles/Button";

const EditPlayerForm = props => {
  const [player, setPlayer] = useState(props.currentPlayer);

  useEffect(() => {
    setPlayer(props.currentPlayer);
  }, [props]);

  const handleNameChange = event => {
    const { name, value } = event.target;
    const firstName = event.target.value;
    const lastName = event.target.value;

    if (
      !firstName ||
      firstName.match(/^[a-zA-Z]*$/) ||
      (!lastName || lastName.match(/^[a-zA-Z]*$/))
    ) {
      setPlayer({
        ...player,
        [name]: value,
      });
    }
  };

  const handleScoreChange = event => {
    const { name, value } = event.target;
    const score = event.target.value;

    if (!score || score.match(/^(100|[0-9]{1,2})?$/)) {
      setPlayer({
        ...player,
        [name]: value,
      });
    }
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
            onChange={handleNameChange}
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
            onChange={handleNameChange}
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
            onChange={handleScoreChange}
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
