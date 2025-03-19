import { yellow } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Yt = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const bodyStyle = {
    margin: "0",
    padding: "0",
  };

  const headerStyle = {
    padding: "30px",
    backgroundColor: "lime",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    top: visible ? "0" : "-80px",
    transition: "top 0.2s ease-out",
  };

  const paragraphStyle = {
    fontSize: "30px",
    marginTop: "100px",
  };

  return (
    <div style={bodyStyle}>
      <header style={headerStyle}>This is the header</header>

      {Array.from({ length: 50 }).map((_, index) => (
        <p style={paragraphStyle} key={index}>
          {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      ))}
    </div>
  );
};
export default Yt;
