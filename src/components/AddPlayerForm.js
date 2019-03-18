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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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

export default AddPlayerForm;
