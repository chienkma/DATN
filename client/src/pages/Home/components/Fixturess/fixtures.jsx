import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const FixturesToday = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get(
          "https://api-football-beta.p.rapidapi.com/fixtures",
          {
            params: {
              date: new Date().toISOString().slice(0, 10),
              timezone: "Asia/Ho_Chi_Minh",
            },
            headers: {
              "x-rapidapi-key":
                "10390e0b6emsh1ed8839eaea9d6ap13dc42jsn0cd0d981d20b",
              "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
            },
          }
        );

        setFixtures(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFixtures();
  }, []);

  return (
    <div>
      <h1 className='bg-[#ED1639] mt-[30px] text-2xl text-white w-[200px] text-center py-2'>
        Upcoming Match
      </h1>
      <Table className='my-5' bordered striped hover>
        <thead>
          <tr className='text-center'>
            <th>League</th>
            <th>Home</th>
            <th>Away</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {fixtures
            .filter(
              (fixture) =>
                fixture.fixture.status.short !== "FT" &&
                fixture.fixture.status.short !== "AET"
            )
            .slice(0, 10)
            .map((fixture) => (
              <tr key={fixture.fixture.id}>
                <td>
                  <img
                    src={fixture.league.logo}
                    alt={fixture.league.name}
                    width={30}
                    height={30}
                  />
                  <span>{fixture.league.name}</span>
                </td>
                <td className>
                  <div>
                    <img
                      src={fixture.teams.home.logo}
                      alt={fixture.teams.home.name}
                      width={30}
                      height={30}
                    />
                  </div>
                  <span>{fixture.teams.home.name}</span>
                  {fixture.fixture.status.short === "FT" ||
                  fixture.fixture.status.short === "AET" ? (
                    <span>
                      {" "}
                      {fixture.goals.home} - {fixture.goals.away}
                    </span>
                  ) : null}
                </td>
                <td className>
                  <img
                    src={fixture.teams.away.logo}
                    alt={fixture.teams.away.name}
                    width={30}
                    height={30}
                  />
                  <span>{fixture.teams.away.name}</span>
                </td>
                <td>
                  {new Date(fixture.fixture.date).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FixturesToday;
