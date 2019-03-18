import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import AddPlayerForm from "./components/AddPlayerForm";
import EditPlayerForm from "./components/EditPlayerForm";
import { StyledApp, MainContainer } from "./components/styles/App";

const state = {
  id: null,
  firstName: "",
  lastName: "",
  score: "",
};

const App = () => {
  const playersData = [
    { id: 1, firstName: "Tiger", lastName: "Woods", score: 100 },
    { id: 2, firstName: "Arnold", lastName: "Palmer", score: 100 },
    { id: 3, firstName: "Phil", lastName: "Mickelson", score: 98 },
    { id: 4, firstName: "Jack", lastName: "Nicklaus", score: 100 },
    { id: 5, firstName: "Dustin", lastName: "Johnson", score: 87 },
    { id: 6, firstName: "Jordan", lastName: "Spieth", score: 86 },
    { id: 7, firstName: "Rory", lastName: "McIlroy", score: 86 },
    { id: 8, firstName: "Chris", lastName: "Baucom", score: 100 },
  ];

  const initialPlayers = () =>
    JSON.parse(window.localStorage.getItem("players")) || playersData;

  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayer, setCurrentPlayer] = useState(state);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const playersJSON = JSON.stringify(players);
    localStorage.setItem("players", playersJSON);
  }, [players]);

  const addPlayer = player => {
    player.id = uuidv4();
    setPlayers([...players, player]);
  };

  const updatePlayer = (id, updatedPlayer) => {
    setEditing(false);

    setPlayers(
      players.map(player => (player.id === id ? updatedPlayer : player))
    );
  };

  const editPlayer = ({ id, firstName, lastName, score }) => {
    setEditing(true);

    setCurrentPlayer({
      id,
      firstName,
      lastName,
      score,
    });
  };

  const deletePlayer = id => {
    setEditing(false);

    setPlayers(players.filter(player => player.id !== id));
  };

  return (
    <StyledApp>
      <Header />
      <MainContainer>
        <h1>Leaderboard</h1>
        <Leaderboard
          players={players}
          editPlayer={editPlayer}
          deletePlayer={deletePlayer}
        />

        {editing ? (
          <div>
            <EditPlayerForm
              editing={editing}
              setEditing={setEditing}
              currentPlayer={currentPlayer}
              updatePlayer={updatePlayer}
            />
          </div>
        ) : (
          <div>
            <AddPlayerForm addPlayer={addPlayer} />
          </div>
        )}
      </MainContainer>
    </StyledApp>
  );
};

export default App;
