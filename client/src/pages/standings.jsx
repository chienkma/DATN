import { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import axios from "axios";

function Standings() {
  const [season, setSeason] = useState("2022");
  const [league, setLeague] = useState("39");
  const [standings, setStandings] = useState([]);
  // useEffect(() => {
  //   const fetchStandings = async () => {
  //     try {
  //       const params = { season: season, league: league };
  //       const response = await standingApi.getAll(params);
  //       const standingsData = response.data.response[0].league.standings[0];
  //       setStandings(standingsData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchStandings();
  // }, [season, league]);
  useEffect(() => {
    async function fetchStandings() {
      const response = await axios.get(
        `https://api-football-beta.p.rapidapi.com/standings?season=${season}&league=${league}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "023dd78b62msh8af8ac27cad9a22p1fa4e6jsne3cc4ab352a9",
            "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
          },
        }
      );
      setStandings(response.data.response[0].league.standings[0]);
    }
    fetchStandings();
  }, [season, league]);

  function handleChangeSeason(event) {
    setSeason(event.target.value);
  }

  function handleChangeLeague(event) {
    setLeague(event.target.value);
  }
  return (
    <div className='w-1/2 px-[120px]'>
      <div className='bg-[#ED1639] mt-[30px] text-2xl text-white w-[200px] text-center'>
        Standing
      </div>
      <Form className='flex gap-6 my-5'>
        <Form.Group controlId='formSeason'>
          <Form.Label className='font-medium'>Season</Form.Label>
          <Form.Control
            as='select'
            value={season}
            onChange={handleChangeSeason}
            className='w-[100px]'
          >
            <option value='2022'>2022/2023</option>
            <option value='2021'>2021/2022</option>
            <option value='2020'>2020/2021</option>
            <option value='2019'>2019/2021</option>
            <option value='2018'>2018/2019</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='formLeague'>
          <Form.Label className='font-medium'>League</Form.Label>
          <Form.Control
            as='select'
            value={league}
            onChange={handleChangeLeague}
            className='w-[200px]'
          >
            <option value='39'>English Premier League</option>
            <option value='61'>French Ligue 1</option>
            <option value='78'>German Bundesliga</option>
            <option value='135'>Italian Serie A</option>
            <option value='140'>Spanish La Liga</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((standing) => (
            <tr key={standing.rank}>
              <td>{standing.rank}</td>
              <td className='flex gap-2'>
                <img
                  src={standing.team.logo}
                  alt={standing.team.name}
                  width='20'
                  height='20'
                />
                {standing.team.name}
              </td>
              <td>{standing.all.played}</td>
              <td>{standing.all.win}</td>
              <td>{standing.all.draw}</td>
              <td>{standing.all.lose}</td>
              <td>{standing.all.goals.for}</td>
              <td>{standing.all.goals.against}</td>
              <td>{standing.goalsDiff}</td>
              <td>{standing.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Standings;
