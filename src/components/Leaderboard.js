import React from "react";
import Button from "./styles/Button";
import { Table, ButtonContainer } from "./styles/Leaderboard";

const LeaderboardTable = props => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {props.players.length > 0 ? (
        props.players
          .sort((player1, player2) => {
            let score1 = parseInt(player1.score);
            let score2 = parseInt(player2.score);
            if (score1 !== score2) {
              return score2 - score1;
            } else if (
              player1.lastName.toLowerCase() < player2.lastName.toLowerCase()
            ) {
              return -1;
            } else if (
              player1.lastName.toLowerCase() > player2.lastName.toLowerCase()
            ) {
              return 1;
            } else if (
              player1.firstName.toLowerCase() < player2.firstName.toLowerCase()
            ) {
              return -1;
            } else if (
              player1.firstName.toLowerCase() > player2.firstName.toLowerCase()
            ) {
              return 1;
            } else {
              return 0;
            }
          })
          .map(player => (
            <tr key={player.id}>
              <td>
                {player.lastName}, {player.firstName}
              </td>
              <td>{player.score}</td>
              <ButtonContainer>
                <Button
                  primary
                  onClick={() => {
                    props.editPlayer(player);
                    console.log(player);
                  }}
                >
                  Edit
                </Button>
                <Button danger onClick={() => props.deletePlayer(player.id)}>
                  Delete
                </Button>
              </ButtonContainer>
            </tr>
          ))
      ) : (
        <tr>
          <td colSpan={3}>Please add player information</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default LeaderboardTable;
