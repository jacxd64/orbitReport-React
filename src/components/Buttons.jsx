import satData from "./satData";
import React from "react";
import './styling.css'

const Buttons = ({ filterByType, setSat, displaySats }) => {

  const orbitButtons = displaySats.map((sat, id) => (
    <button key={id} onClick={() => filterByType(sat)}>
      {sat} Orbit
    </button>
  ));

  return (
    <div className="flex-container">
      {orbitButtons}

      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;