import React, { useState } from "react";
import Form from "./styles/Form";
import Button from "./styles/Button";

const AddPlayerForm = props => {
  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    score: "",
  };

  const [player, setPlayer] = useState(initialFormState);

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

    props.addPlayer(player);
    setPlayer(initialFormState);
  };

  return (
    <Form method="post" onSubmit={handleOnSubmit}>
      <fieldset>
        <h2>Add Player Info</h2>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={player.firstName}
            onChange={handleNameChange}
            required
            autoFocus
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Smith"
            value={player.lastName}
            onChange={handleNameChange}
            required
          />
        </label>
        <label htmlFor="score">
          Score
          <input
            type="number"
            name="score"
            placeholder="100"
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

export default AddPlayerForm;
