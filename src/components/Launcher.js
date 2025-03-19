import React from "react";
import sharingan2 from "../assets/itachi.jpeg";

const Launcher = () => {
  const collection = [
    {
      orderIndex: 1000,
      name: "JK",
    },
    {
      orderIndex: 2000,
      name: "IK",
    },
    {
      orderIndex: 3000,
      name: "PK",
    },
    {
      orderIndex: 4000,
      name: "AK",
    },
  ];

  return (
    <>
      <header className="App-header">
        <img src={sharingan2} className="App-logo" alt="logo" />
        <p>その写輪眼で何を視ているんだ？</p>
      </header>
    </>
  );
};

export default Launcher;
