import React, { Fragment } from "react";
import Header from "../../components/Header";
import NewsList from "./components/NewLists/newList";
import Standings from "./components/Standings/standings";
import FixturesToday from "./components/Fixturess/fixtures";

function Home() {
  return (
    <Fragment>
      <Header />
      <NewsList />
      <div className='flex'>
        <Standings />
        <FixturesToday />
      </div>
    </Fragment>
  );
}

export default Home;
