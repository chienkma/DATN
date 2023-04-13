import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // Thay đổi URL với các tham số tương ứng để lấy danh sách các trận đấu
    const url =
      "https://api-football-beta.p.rapidapi.com/fixtures?league=2790&season=2021&round=31";
    const headers = {
      "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
      "x-rapidapi-key": "023dd78b62msh8af8ac27cad9a22p1fa4e6jsne3cc4ab352a9",
    };

    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => {
        setFixtures(data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Thời gian</th>
          <th>Đội chủ nhà</th>
          <th>Kết quả</th>
          <th>Đội khách</th>
          <th>Sân vận động</th>
        </tr>
      </thead>
      <tbody>
        {fixtures.map((fixture) => (
          <tr key={fixture.fixture.id}>
            <td>{fixture.fixture.date}</td>
            <td>{fixture.teams.home.name}</td>
            <td>
              {fixture.goals.home} - {fixture.goals.away}
            </td>
            <td>{fixture.teams.away.name}</td>
            <td>{fixture.fixture.venue.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Fixtures;
