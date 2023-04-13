import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NewsList from "./pages/newList";
import Standings from "./pages/standings";

function App() {
  return (
    <div>
      <Header />
      <NewsList />
      <Standings />
    </div>
  );
}

export default App;
