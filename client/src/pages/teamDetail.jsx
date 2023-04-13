import React, { useEffect, useState } from "react";
import axios from "axios";

function TeamDetail(props) {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          `https://api-football-beta.p.rapidapi.com/v3/teams?id=${props.teamId}`
        );
        setTeamData(response.data.response[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTeamData();
  }, [props.teamId]);

  if (!teamData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={teamData.logo} alt={teamData.name} />
      <h1>{teamData.name}</h1>
      <h2>Trophies</h2>
      <ul>
        {teamData.leagues.trophies.map((trophy) => (
          <li key={trophy.league.id}>
            {trophy.league.name}: {trophy.season}
          </li>
        ))}
      </ul>
      <h2>Players</h2>
      <ul>
        {teamData.squad.map((player) => (
          <li key={player.player.id}>
            {player.player.name} ({player.player.position})
          </li>
        ))}
      </ul>
      <h2>Coach</h2>
      <p>{teamData.coach.name}</p>
    </div>
  );
}

export default TeamDetail;
